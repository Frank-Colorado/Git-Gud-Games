import { useParams } from 'react-router-dom';
import MainDisplay from '../components/MainDisplay';

const SearchPage = () => {
  const { searchTerm } = useParams();
  const headerText = `Search Results for ${searchTerm}`;
  const queryText = `&search=${searchTerm}`;
  return (
    <div>
      <MainDisplay header={headerText} query={queryText} />
    </div>
  );
};
export default SearchPage;
