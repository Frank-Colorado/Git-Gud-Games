import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import GenrePage from './pages/GenrePage';
import SearchPage from './pages/SearchPage';
import GamePage from './pages/GamePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games/:genre" element={<GenrePage />} />
          <Route path="/search/:searchTerm" element={<SearchPage />} />
          <Route path="/game/:id" element={<GamePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
