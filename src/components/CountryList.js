// CountryList.js
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const CountryList = ({ countries, onCountryClick }) => {
    const columnDefs = [
        { headerName: 'Country', field: 'name', sortable: true, filter: true },
        { headerName: 'Population', field: 'population', sortable: true, filter: true },
        { headerName: 'Languages', field: 'languages', sortable: true, filter: true },
        { headerName: 'Currencies', field: 'currencies', sortable: true, filter: true },
        { headerName: 'Flag', field: 'flag', cellRenderer: (params) => `<img src="${params.value}" alt="Flag" width="30" />` }
    ];

    return (
        <div className="ag-theme-alpine" style={{ height: '500px', width: '100%' }}>
            <AgGridReact
                columnDefs={columnDefs}
                rowData={countries}
                onRowClicked={onCountryClick}
                pagination={true}
            />
        </div>
    );
};

export default CountryList;
