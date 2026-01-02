import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './CustomHooks/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { CountryProvider } from './CustomHooks/CountryProvider';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <CountryProvider>
     <BrowserRouter>
         <App />
      </BrowserRouter>
      </CountryProvider>
    </ThemeProvider> 
  </StrictMode>,
)
