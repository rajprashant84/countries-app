import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search by country name, language, or currency..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
