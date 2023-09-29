import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import GenrePage from './pages/GenrePage';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games/:genre" element={<GenrePage />} />
        <Route path="/search/:searchTerm" element={<SearchPage />} />
      </Routes>
    </Router>
  );
};

export default App;
