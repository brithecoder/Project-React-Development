
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="not-found-container">
      <div className="not-found-content">
        <span className="not-found-icon" role="img" aria-label="globe">
          🗺️
        </span>
        <h1>404 - Page Not Found</h1>
        <p>
          Oops! It looks like the country or page you are looking for 
          doesn't exist in our records.
        </p>
        <button className="home-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </main>
  );
}