import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
import SearchForm from './components/SearchForm';
import { Favorites } from './components/Favorites'; // Import Favorites as named export
import ErrorBoundary from './components/ErrorBoundary';
import useCountries from './hooks/useCountries';
import './index.css';

const App = () => {
    const { countries, loading } = useCountries();

    const handleCountryClick = (country) => {
        // Navigate to country details or expand details in place
        console.log('Clicked country:', country);
    };

    const handleSearch = (searchTerm) => {
        // Implement search functionality
        console.log('Searching for:', searchTerm);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>REST Countries App</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/favorites">Favorites</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={
                        <div className="main-content">
                            <SearchForm onSearch={handleSearch} />
                            <ErrorBoundary>
                                <CountryList countries={countries} onCountryClick={handleCountryClick} />
                            </ErrorBoundary>
                        </div>
                    } />
                    <Route path="/favorites" element={
                        <div className="main-content">
                            <Favorites /> {/* Use Favorites directly as it is now imported correctly */}
                        </div>
                    } />
                    <Route path="/country/:alpha3Code" element={
                        <div className="main-content">
                            <CountryDetails />
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

