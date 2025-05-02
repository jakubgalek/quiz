import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import CookiesBanner from './components/CookiesBanner';
import Footer from './components/Footer';
import Header from './components/Header'; // Importujemy nowy komponent

function App() {
  return (
    <BrowserRouter>
      <Header />
      <CookiesBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:categoryId" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;