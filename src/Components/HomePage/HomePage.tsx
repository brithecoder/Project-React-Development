import  { useState } from 'react';
import "./HomePage.css";
import CountryCard from '../CountryCard/CountryCard';
import SearchBar from '../SearchBar/SearchBar';
import { useCountries } from '../../CustomHooks/CountryContext';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
const { countries, loading, error } = useCountries();

 // Filter the countries that are ALREADY in the context
  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = regionFilter === '' || country.region === regionFilter;
    return matchesSearch && matchesRegion;
  });
  
    

  if (loading) return <div className="loader">Loading countries...</div>;
  if (error) return <div className="error-msg">{error.message}</div>;

  return (
  <main className="home-container">
      <SearchBar
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        regionFilter={regionFilter} 
        setRegionFilter={setRegionFilter} 
      />

      {/* 1. Check if Loading first */}
      {loading ? (
        <div className="loader">Loading countries...</div>
      ) : filteredCountries.length > 0 ? (
        /* 2. Show the grid if there are results */
        <div className="countries-grid">
          {filteredCountries.map(country => (
            <CountryCard key={country.alpha3Code} country={country} />
          ))}
        </div>
      ) : (
        /* 3. Show the "No Results" message if array is empty */
        <div className="no-results">
          <span className="no-results-icon">🔎</span>
          <h3>No countries found</h3>
          <p>We couldn't find anything matching "{searchQuery}"</p>
          <button onClick={() => setSearchQuery('')} className="clear-btn">
            Clear Search
          </button>
        </div>
      )}
    </main>
  );
}