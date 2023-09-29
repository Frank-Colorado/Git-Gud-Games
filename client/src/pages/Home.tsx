import { useParams } from 'react-router-dom';

import { GameApiQuery } from '../store';

interface HomeProps {
  gamesQuery: GameApiQuery;
}

const Home = ({ gamesQuery }: HomeProps) => {
  return (
    <div>
      <h1>placeholder</h1>
    </div>
  );
};

export default Home;
