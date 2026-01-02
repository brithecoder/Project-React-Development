import  { useState } from 'react';
import "./HomePage.css";
import useFetch from '../CustomHooks/useFetch';
import { Country, type RawCountry } from '../Types';
import CountryCard from './CountryCard';

export default function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchQuery, setSearchQuery] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [regionFilter, setRegionFilter] = useState('');

  // 1. Fetch the raw data (using 'any' here because it's the raw API shape before transformation)
 const { data: rawData, loading, error } = useFetch<RawCountry[]>(
   'https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,currencies,borders,languages,population,flags,cca3'
);

  // 2. Transform AND Filter in one go
  const filteredCountries = rawData
    ?.map((item) => {
        const firstCurrency = item.currencies 
    ? Object.values(item.currencies)[0] 
    : { name: 'N/A', symbol: '' };
      // Create a new instance of your Class for every country
      return new Country(
        item.name,
        item.capital|| [],
        item.region,
        item.subregion,
        firstCurrency,
        item.borders || [],
        item.languages || {},
        item.population,
        item.flags,
        item.cca3
      );
    })
    .filter((country) => {
      // Now 'country' is an instance of your Class! 
      // Note: your class uses 'this.name = APIName.common', so use country.name
      const matchesSearch = country.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesRegion = regionFilter === '' || country.region === regionFilter;
      
      return matchesSearch && matchesRegion;
    });

  if (loading) return <div className="loader">Loading countries...</div>;
  if (error) return <div className="error-msg">{error.message}</div>;

  return (
    <div className="home-page">
      <section className="controls-section">
        {/* ... your search and select inputs ... */}
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