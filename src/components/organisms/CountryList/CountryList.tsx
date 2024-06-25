import React, { useState, useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef, GridReadyEvent, RowClickedEvent, GridApi, ICellRendererParams } from 'ag-grid-community';
import { Country } from '../../../types/types';
import './CountryList.css';

interface CountryListProps {
  countries: Country[];
  favorites: Country[];
  onToggleFavorite: (country: Country) => void;
  onRowClick: (country: Country) => void;
}

const CountryList: React.FC<CountryListProps> = ({ countries, favorites, onToggleFavorite, onRowClick }) => {
  const [paginationPageSize, setPaginationPageSize] = useState(10);
  const gridApiRef = useRef<GridApi | null>(null);

  const columns: ColDef[] = [
    { headerName: 'Name', field: 'name.common', sortable: true, filter: true, cellStyle: { padding: '10px', fontWeight: 'bold' } },
    { headerName: 'Population', field: 'population', sortable: true, filter: true, cellStyle: { padding: '10px' } },
    { headerName: 'Languages', field: 'languages', valueGetter: (params: any) => Object.values(params.data.languages || {}).join(', '), sortable: true, filter: true, cellStyle: { padding: '10px' } },
    {
      headerName: 'Currencies',
      field: 'currencies',
      valueGetter: (params: any) => {
        const currencies = params.data.currencies || {};
        return Object.values(currencies).map((c: any) => c.name).join(', ');
      },
      sortable: true,
      filter: true,
      cellStyle: { padding: '10px' }
    },
    {
      headerName: 'Flag',
      field: 'flags',
      cellRenderer: (params: ICellRendererParams) => (
        <img src={params.data.flags.svg} alt={`${params.data.name.common} flag`} className="country-flag" />
      ),
      width: 80
    } as ColDef
  ];

  useEffect(() => {
    if (gridApiRef.current) {
      gridApiRef.current.paginationSetPageSize(paginationPageSize);
    }
  }, [paginationPageSize]);

  const onFilterTextBoxChanged = () => {
    if (gridApiRef.current) {
      gridApiRef.current.setQuickFilter((document.getElementById('filter-text-box') as HTMLInputElement).value);
    }
  };

  const onGridReady = (params: GridReadyEvent) => {
    gridApiRef.current = params.api;
    params.api.sizeColumnsToFit();
    params.api.paginationSetPageSize(paginationPageSize);
  };

  return (
    <div className="country-list-container">
      <div className="filter-container">
        <input type="text" id="filter-text-box" placeholder="Search by name, language, or currency..." onInput={onFilterTextBoxChanged} className="search-box"/>
        <button onClick={onFilterTextBoxChanged} className="search-button">Search</button>
      </div>
      <div className="ag-theme-alpine grid-container">
        <AgGridReact
          rowData={countries}
          columnDefs={columns}
          domLayout="autoHeight"
          pagination={true}
          paginationPageSize={paginationPageSize}
          onRowClicked={(event: RowClickedEvent) => onRowClick(event.data as Country)}
          onGridReady={onGridReady}
          onFirstDataRendered={(params) => params.api.sizeColumnsToFit()}
        />
      </div>
    </div>
  );
};

export default CountryList;
