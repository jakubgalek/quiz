import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import CookiesBanner from './components/CookiesBanner';
import Footer from './components/Footer';
import Header from './components/Header';
import QualificationScreen from './components/QualificationScreen';
import NotFound from './components/NotFound';
import RandomQuestionScreen from './components/RandomQuestionScreen';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <CookiesBanner />
      <Routes>
        <Route path="/quiz" element={<Home />} />
        <Route path="/quiz/:categoryId" element={<Quiz />} />
        <Route path="/qualification/:id" element={<QualificationScreen />} />
        <Route path="/results" element={<Results />} />
        <Route path="/random-question/:questionId" element={<RandomQuestionScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
