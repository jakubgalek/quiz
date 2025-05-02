import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import questions from '../data/questions'

export default function Quiz() {
  const { categoryId } = useParams()
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(40 * 60) // 40 minut

  // Filtruj pytania według kategorii
  const categoryQuestions = questions.filter(q => q.category === categoryId)

  // Licznik czasu
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleAnswer = (answerIndex) => {
    if (answerIndex === categoryQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion < categoryQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      navigate('/results', { state: { 
        score, 
        totalQuestions: categoryQuestions.length,
        timeSpent: `${Math.floor((40 * 60 - timeLeft) / 60)}:${String((40 * 60 - timeLeft) % 60).padStart(2, '0')}`
      }})
    }
  }

 return (
    <div className="wrapper min-h-screen">

      <main className="main">
        <div className="box">
          <div className="mb-4 text-white">
            Czas: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
          </div>
          
          <h2 className="text-xl font-semibold mb-4 text-white">
            Pytanie {currentQuestion + 1}/{categoryQuestions.length}
          </h2>
          
          <p className="mb-6 text-white">{categoryQuestions[currentQuestion]?.text}</p>
          
          <div className="space-y-2">
            {categoryQuestions[currentQuestion]?.answers.map((answer, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className="question" // Używa Twojego starego stylu
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}