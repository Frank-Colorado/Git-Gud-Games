import MainDisplay from '../components/MainDisplay';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const HomePage = () => {
  const headerText = "Here's What's Good...";
  const queryText = '&metacritic=100';
  const { loading, data } = useQuery(GET_ME);
  console.log(data);

  return (
    <div>
      <MainDisplay header={headerText} query={queryText} />
    </div>
  );
};

export default HomePage;
