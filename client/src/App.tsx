import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import GenrePage from './pages/GenrePage';
import SearchPage from './pages/SearchPage';
import GamePage from './pages/GamePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserPage from './pages/UserPage';
import EditUserPage from './pages/EditUserPage';
import { useAppDispatch } from './hooks';
import { useQuery } from '@apollo/client';
import { GET_ME } from './graphql/queries';
import { setUser } from './store';

const App = () => {
  const dispatch = useAppDispatch();
  const { data } = useQuery(GET_ME);

  useEffect(() => {
    if (data) {
      console.log('App useEffect called');
      dispatch(setUser(data.me));
    }
  });

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/profile/edit" element={<EditUserPage />} />
        <Route path="/games/:genre" element={<GenrePage />} />
        <Route path="/search/:searchTerm" element={<SearchPage />} />
        <Route path="/game/:gameId" element={<GamePage />} />
      </Routes>
    </Router>
  );
};

export default App;
