import MainDisplay from '../components/MainDisplay';
import { useGetGamesQuery } from '../store';

const Home = () => {
  const headerText = "Here's What's Good...";
  return (
    <div>
      <MainDisplay
        header={headerText}
        query="&genre=action"
        gamesQuery={useGetGamesQuery}
      />
    </div>
  );
};

export default Home;
