import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (type: string, query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('name');

  const handleSearch = () => {
    onSearch(type, query);
  };

  return (
    <div className="search-bar">
      <select onChange={(e) => setType(e.target.value)} value={type} className="search-select">
        <option value="name">Name</option>
        <option value="language">Language</option>
        <option value="currency">Currency</option>
      </select>
      <Input
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button text="Search" onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;


