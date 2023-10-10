import MainDisplay from '../components/MainDisplay';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const headerText = "Here's What's Good...";
  const queryText = '&metacritic=100';
  const user = useSelector((state) => state.user);

  return (
    <div>
      <MainDisplay header={headerText} query={queryText} />
    </div>
  );
};

export default HomePage;
