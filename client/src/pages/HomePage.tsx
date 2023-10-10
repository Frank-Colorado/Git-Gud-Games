import MainDisplay from '../components/MainDisplay';

const HomePage = () => {
  const headerText = "Here's What's Good...";
  const queryText = '&metacritic=100';

  return (
    <div>
      <MainDisplay header={headerText} query={queryText} />
    </div>
  );
};

export default HomePage;
