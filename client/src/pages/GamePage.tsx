import { useParams } from 'react-router-dom';

const GamePage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 style={{ color: 'white' }}>Game Page</h1>
    </div>
  );
};

export default GamePage;
