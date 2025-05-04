import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import questions from '../data/questions';
import NotFound from './NotFound';

const RandomQuestionScreen = () => {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const question = questions.find(q => q.id === questionId);
  
  if (!question) {
    return <NotFound />;
  }

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    setIsAnswerChecked(false);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) {
      alert('Wybierz odpowiedź przed sprawdzeniem!');
      return;
    }

    setIsAnswerChecked(true);
    setIsCorrect(selectedAnswer === question.correctAnswer);
  };

 const handleRandomQuestion = () => {
  // Losowanie nowego pytania, ale upewniamy się, że to nie będzie obecne pytanie
  const filteredQuestions = questions.filter(q => q.category === question.category && q.id !== question.id);
  
  if (filteredQuestions.length === 0) {
    alert("Brak innych pytań w tej kategorii.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
  const randomQuestion = filteredQuestions[randomIndex];

  setIsAnswerChecked(false);
  setSelectedAnswer(null);

  navigate(`/random-question/${randomQuestion.id}`);
};

  return (
    <div className="quiz-container">

      {/* Licznik i informacje */}
      <div className="quiz-meta">
        <span>Losowe pytanie</span>
      </div>

      {/* Pytanie */}
      <div className="question-container">
        <p className="question-number">
          {question.text}
        </p>

        {/* Odpowiedzi */}
        <div className="answers-list">
          {question.answers.map((answer, index) => (
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

      <div className="answer-feedback-container">
        <button className="random-question" onClick={handleRandomQuestion}>
             Losuj ponownie
        </button>
        <button className="check-answer" onClick={handleCheckAnswer}>
            Sprawdź odpowiedź
        </button>
      </div>
      {isAnswerChecked && (
        <div className={`answer-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? 'Brawo! Odpowiedź jest poprawna.' : 'Niestety, odpowiedź jest niepoprawna.'}
        </div>
      )}   

    </div>
  );
};

export default RandomQuestionScreen;
