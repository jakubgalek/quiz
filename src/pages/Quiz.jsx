import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import questions from '../data/questions';

export default function Quiz() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(39 * 60 + 59); // 39:59
  const [answers, setAnswers] = useState([]);

  const categoryQuestions = questions.filter(q => q.category === categoryId);

  useEffect(() => {
    // Inicjalizacja odpowiedzi
    setAnswers(Array(categoryQuestions.length).fill(null));
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          handleFinishQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [categoryId]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = index;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === categoryQuestions[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }

    if (currentQuestionIndex < categoryQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(answers[currentQuestionIndex + 1]);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(answers[currentQuestionIndex - 1]);
    }
  };

  const handleQuestionNavigation = (index) => {
    setCurrentQuestionIndex(index);
    setSelectedAnswer(answers[index]);
  };

  const handleFinishQuiz = () => {
    navigate('/results', {
      state: {
        score,
        totalQuestions: categoryQuestions.length,
        timeSpent: formatTime(39 * 60 + 59 - timeLeft),
        category: categoryQuestions[0]?.categoryName || categoryId
      }
    });
  };

  return (
    <div className="quiz-container">

      {/* Licznik i informacje */}
      <div className="quiz-meta">
        <span>Test - {categoryQuestions.length} pytań</span>
        <span>{currentQuestionIndex + 1}/{categoryQuestions.length}</span>
        <span className="timer">{formatTime(timeLeft)}</span>
      </div>

      {/* Pytanie */}
      <div className="question-container">
        <p className="question-text">
          <span className="question-number">{currentQuestionIndex + 1}.</span>
          {categoryQuestions[currentQuestionIndex]?.text}
        </p>
        
        {/* Odpowiedzi */}
        <div className="answers-list">
          {categoryQuestions[currentQuestionIndex]?.answers.map((answer, index) => (
            <div
              key={index}
              className={`answer-option ${selectedAnswer === index ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(index)}
            >
              <span className="option-letter">{String.fromCharCode(65 + index)}</span>
              <span className="option-text">{answer}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Nawigacja */}
      <div className="navigation-buttons">
        <button
          className="nav-button back"
          onClick={handlePrevQuestion}
          disabled={currentQuestionIndex === 0}
        >
          wróć
        </button>
        <button
          className="nav-button next"
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex === categoryQuestions.length - 1}
        >
          dalej
        </button>
        <button
          className="nav-button finish"
          onClick={handleFinishQuiz}
        >
          zakończ
        </button>
      </div>

      {/* Siatka pytań */}
      <div className="questions-grid">
        {categoryQuestions.map((_, index) => (
          <div
            key={index}
            className={`question-number ${currentQuestionIndex === index ? 'active' : ''} ${answers[index] !== null ? 'answered' : ''}`}
            onClick={() => handleQuestionNavigation(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}