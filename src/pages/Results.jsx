import { useLocation, Link } from 'react-router-dom'

export default function Results() {
  const location = useLocation()
  const { score = 0, totalQuestions = 1, timeSpent = '0:00' } = location.state || {}

  return (
    <div className="wrapper min-h-screen">

      <main className="main text-center">
        <h1 className="text-3xl mb-6">Twój wynik</h1>
        <div className="text-5xl mb-4">
          {score}/{totalQuestions} ({Math.round((score / totalQuestions) * 100)}%)
        </div>
        <p className="mb-6">Czas: {timeSpent}</p>
        <Link 
          to="/quiz" 
          className="test"
        >
          Strona główna
        </Link>
      </main>
    </div>
  )
}