import { useNavigate, useParams } from 'react-router-dom';
import qualificationsData from '../data/qualifications';

const QualificationScreen = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  // Znajdź kwalifikację po ID
  const qualification = qualificationsData.find(q => q.id === id);

  if (!qualification) {
    return <div>Kwalifikacja nie znaleziona</div>;
  }

  const handleStartTest = () => {
    navigate(`/quiz/${id}`); // Użyj dynamicznego ID
  };

  const handleRandomQuestion = () => {
    navigate('/random-question'); // Przejście do losowego pytania
  };

  return (
    <article className="main">
      <div className="box">
        <div className="initialLetterTest">{qualification.code}</div>
        <h2>{qualification.name}</h2>
      </div>

      <div className="buttons-container">
        <button 
          className="test" 
          onClick={handleStartTest}
        >
          test
        </button>
        <button 
          className="question" 
          onClick={handleRandomQuestion}
        >
          pytanie
        </button>
      </div>
    </article>
  );
};

export default QualificationScreen;