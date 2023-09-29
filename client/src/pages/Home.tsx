import MainDisplay from '../components/MainDisplay';
import { useGetGamesQuery } from '../store';

const Home = () => {
  const headerText = "Here's What's Good...";
  const queryText = '&metacritic=100';
  return (
    <div>
      <MainDisplay
        header={headerText}
        query={queryText}
        gamesQuery={useGetGamesQuery}
      />
    </div>
  );
};

export default Home;
