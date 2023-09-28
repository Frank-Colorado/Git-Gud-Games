import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { useGetGamesByGenreQuery } from './store';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home gamesQuery={useGetGamesByGenreQuery} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
