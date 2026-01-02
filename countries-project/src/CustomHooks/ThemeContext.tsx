import { createContext, useContext } from 'react';
import type { ThemeContextType } from "../Types"



// 1. Create the Context object HERE
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2. Create the Custom Hook HERE
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};