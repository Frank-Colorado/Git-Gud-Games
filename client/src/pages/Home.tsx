import MainDisplay from '../components/MainDisplay';
import { useGetGamesByGenreQuery } from '../store';

const Home = () => {
  const headerText = "Here's What's Good...";
  return (
    <div>
      <MainDisplay
        header={headerText}
        query="action"
        gamesQuery={useGetGamesByGenreQuery}
      />
    </div>
  );
};

export default Home;
