import React, { useMemo } from 'react';
import useFetch from './useFetch';
import { Country,type  RawCountry } from '../Types';
import { CountryContext } from './CountryContext'; // Import the context we just made

export const CountryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: rawData, loading, error } = useFetch<RawCountry[]>(
    'https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,currencies,borders,languages,population,flags,cca3'
  );

  const countries = useMemo(() => {
    return rawData?.map(item => new Country(
      item.name,
      item.capital || [],
      item.region,
      item.subregion,
      item.currencies ? Object.values(item.currencies)[0] : { name: 'N/A', symbol: '' },
      item.borders || [],
      item.languages || {},
      item.population,
      item.flags,
      item.cca3
    )) || [];
  }, [rawData]);

  const getCountryByCode = (code: string) => {
    return countries.find(c => c.alpha3Code === code);
  };

  // Helper to turn "FRA" into "France" for the border buttons
  const getCountryNameByCode = (code: string) => {
    const found = countries.find(c => c.alpha3Code === code);
    return found ? found.name : code;
  };

  const value = {
    countries,
    loading,
    error,
    getCountryByCode,
    getCountryNameByCode
  };

  return (
    <CountryContext.Provider value={value}>
      {children}
    </CountryContext.Provider>
  );
};