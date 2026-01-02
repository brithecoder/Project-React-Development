import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCountries } from '../CustomHooks/CountryContext'; // Use your new hook
import './CountryDetailPage.css';

export default function CountryDetailPage() {
  const { countryCode } = useParams(); 
  const navigate = useNavigate();
  
  // 1. Grab everything you need from Context
  const { getCountryByCode, getCountryNameByCode, loading } = useCountries();

  // 2. Find the country locally (Instant!)
  const country = getCountryByCode(countryCode || '');

  // 3. Handle the loading state (only happens on first app load)
  if (loading) return <div className="loader">Loading countries...</div>;
  
  // 4. Handle if the code in the URL is invalid
  if (!country) return <div className="error-msg">Country not found.</div>;

  return (
    <main className="detail-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        <span className="arrow">←</span> Back
      </button>

      <section className="detail-container">
        <div className="detail-flag">
          <img src={country.flagPicture} alt={`${country.name} flag`} />
        </div>

        <div className="detail-info">
          <h2>{country.name}</h2>
          
          <div className="info-columns">
            <div className="column">
              <p><strong>Native Name:</strong> {country.nativeNameCommon}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Sub Region:</strong> {country.subregion}</p>
              <p><strong>Capital:</strong> {country.capital}</p>
            </div>
            <div className="column">
              <p><strong>Top Level Domain:</strong> {country.alpha3Code}</p>
              <p><strong>Currencies:</strong> {country.currency}</p>
              <p><strong>Languages:</strong> {country.language}</p>
            </div>
          </div>

          <div className="border-countries">
            <strong>Border Countries: </strong>
            <div className="border-tags">
              {country.borders.length > 0 ? (
                country.borders.map((borderCode) => (
                  <Link 
                    key={borderCode} 
                    to={`/country/${borderCode}`} 
                    className="border-tag"
                  >
                    {/* Use the helper to show 'France' instead of 'FRA' */}
                    {getCountryNameByCode(borderCode)}
                  </Link>
                ))
              ) : (
                <span className="no-borders">None</span>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}