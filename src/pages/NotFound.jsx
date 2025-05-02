import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center py-10">
      <h2 className="text-4xl font-bold text-blue-500 mb-4">404</h2>
      <p className="text-xl mb-6">Strona nie została znaleziona</p>
      <Link 
        to="/" 
        className="test" // Używa Twojego stylu przycisku
      >
        Powrót do strony głównej
      </Link>
    </div>
  )
}