import { useNavigate, useParams } from 'react-router-dom';
import qualificationsData from '../data/qualifications';
import questions from '../data/questions';
import NotFound from './NotFound';

const QualificationScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Znajdź kwalifikację po ID
  const qualification = qualificationsData.find(q => q.id === id);

  if (!qualification) {
    return <NotFound />;
  }

  const handleStartTest = () => {
    navigate(`/quiz/${id}`);
  };

  const handleRandomQuestion = () => {
    // Filtrowanie pytań na podstawie kategorii kwalifikacji
    const filteredQuestions = questions.filter(
      (q) => q.category === qualification.id
    );

    // Jeśli brak pytań, wyświetl alert
    if (filteredQuestions.length === 0) {
      alert('Brak pytań dla tej kwalifikacji.');
      return;
    }

    // Wybór losowego pytania
    const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
    const randomQuestion = filteredQuestions[randomIndex];

    // Nawigacja do losowego pytania w trybie sprawdzania
    navigate(`/random-question/${randomQuestion.id}`);
  };

  return (
    <article className="main">
      <div className="box">
        <div className="initialLetterTest">{qualification.code}</div>
        <h2>{qualification.name}</h2>

        {/* Nowe dane */}
        <p><strong>Kategoria:</strong> {qualification.category}</p>
        <p><strong>Opis:</strong> {qualification.description}</p>
      </div>

      <div className="buttons-container">
        <button className="test" onClick={handleStartTest}>
          Test
        </button>
        <button className="question" onClick={handleRandomQuestion}>
          Losuj pytanie
        </button>
      </div>
    </article>
  );
};

export default QualificationScreen;
