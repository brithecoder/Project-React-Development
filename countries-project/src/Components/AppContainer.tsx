import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'
import HomePage from './HomePage';
import NotFound from './NotFound';
import CountryDetailPage from './CountryDetailPage';

export default function AppContainer() {
  return (
    <div>
        <NavBar />
         <Routes>
              <Route path ="/" element={<HomePage /> } />
              <Route path="/country/:countryCode" element={<CountryDetailPage />} />
              <Route path ="*" element={<NotFound />} />    
         </Routes>
    </div>
  )
}
