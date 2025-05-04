import { useState } from 'react';
import { Link } from 'react-router-dom';
import qualifications from '../data/qualifications';
import { FaSearch } from 'react-icons/fa'; // Import ikony lupki

export default function Home() {
  const [searchTerm, setSearchTerm] = useState(''); // Stan na przechowanie tekstu

  // Funkcja filtrująca kwalifikacje na podstawie wprowadzonego tekstu
  const filteredQualifications = qualifications.filter(q =>
    (q.name && q.name.toLowerCase().includes(searchTerm.toLowerCase())) || 
    (q.code && q.code.toLowerCase().includes(searchTerm.toLowerCase())) // Sprawdzamy, czy 'name' i 'code' są zdefiniowane
  );

  return (
    <div className="wrapper min-h-screen">
      <main className="main">
        <h2>Wybierz typ kwalifikacji</h2>

        {/* Pole wyszukiwania */}
        <div className="search-container">
          <div className="search-icon">
            <FaSearch /> {/* Ikona lupki */}
          </div>
          <input
            type="text"
            placeholder="Szukaj..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Uaktualnianie stanu przy wpisywaniu
            className="search-input"
          />
        </div>

        {/* Lista kwalifikacji */}
        <div className="list">
          <ul>
            {filteredQualifications.map((q) => (
              <li key={q.id}>
                <Link to={`/qualification/${q.id}`} className="titleOfExam">
                  <span className="initialLetter">{q.code}</span>
                  {q.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
