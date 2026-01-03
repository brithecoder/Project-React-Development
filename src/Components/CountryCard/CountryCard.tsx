import { type CountryCardProps } from '../../Types';
import { useNavigate } from 'react-router-dom';
import './CountryCard.css';

export default function CountryCard({ country }: CountryCardProps) {
 const navigate = useNavigate();

 // We use the alpha3Code (e.g., 'FRA') for the URL as it's unique and stable
  const handleCardClick = () => {
    navigate(`/country/${country.alpha3Code}`);
  };
    return (
   <article className="country-card" onClick={handleCardClick}>
      <div className="card-image">
        <img src={country.flagPicture} alt={`${country.name} flag`} loading="lazy" />
      </div>
      <div className="card-content">
        <h3 className="country-name">{country.name}</h3>
        <ul className="country-stats">
          <li>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </li>
          <li>
            <strong>Region:</strong> {country.region}
          </li>
          <li>
            <strong>Capital:</strong> {country.capital}
          </li>
        </ul>
      </div>
    </article>
  )
}
