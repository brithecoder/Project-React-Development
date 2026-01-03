import { createContext, useContext } from 'react';
import { Country } from '../Types';

// Define what the "radio signal" looks like
export interface CountryContextType {
  countries: Country[];
  loading: boolean;
  error: Error | null;
  getCountryByCode: (code: string) => Country | undefined;
  getCountryNameByCode: (code: string) => string; // Bonus: helper for borders
}

// Create the Context object
export const CountryContext = createContext<CountryContextType | undefined>(undefined);

// Create the Custom Hook for easy access
export const useCountries = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountries must be used within a CountryProvider');
  }
  return context;
};