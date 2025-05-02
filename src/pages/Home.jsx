import { Link } from 'react-router-dom'
import qualifications from '../data/qualifications'

export default function Home() {
  return (
    <div className="wrapper min-h-screen">
      <main className="main">
        <h2>Wybierz typ kwalifikacji</h2>
        <div className="list">
          <ul>
            {qualifications.map((q) => (
              <li key={q.id}>
                <Link 
                  to={`/quiz/${q.id}`} 
                  className="titleOfExam"
                >
                  <span className="initialLetter">{q.id}</span>
                  {q.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}