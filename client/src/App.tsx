import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh', width: '100wh' }}>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
