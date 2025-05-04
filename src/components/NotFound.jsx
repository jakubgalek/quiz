import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h2 className="not-found-header">404</h2>
      <p className="not-found-message">Strona nie została znaleziona</p>
      <Link to="/quiz" className="not-found-link">
        Powrót do strony głównej
      </Link>
    </div>
  );
}
