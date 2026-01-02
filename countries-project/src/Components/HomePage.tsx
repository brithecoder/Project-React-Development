import  { useState } from 'react';
import "./HomePage.css";
import CountryCard from './CountryCard';
import SearchBar from './SearchBar';
import { useCountries } from '../CustomHooks/CountryContext';

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
    <div className="home-page">
      <section className="controls-section">
       <SearchBar
       searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      regionFilter={regionFilter}
      setRegionFilter={setRegionFilter} />
      </section>

      <div className="countries-grid">
        {filteredCountries?.map((country) => (
          // Use alpha3Code as the key since it's unique
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
    </div>
  );
}