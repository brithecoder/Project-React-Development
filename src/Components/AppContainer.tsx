import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar'
import HomePage from './HomePage/HomePage';
import NotFound from './NotFound/NotFound';
import CountryDetailPage from './CoutryDetailPage/CountryDetailPage';

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
