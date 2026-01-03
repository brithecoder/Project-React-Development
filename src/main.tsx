import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './CustomHooks/ThemeProvider.tsx';
import { BrowserRouter } from 'react-router-dom';
import { CountryProvider } from './CustomHooks/CountryProvider.tsx';
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
