import { useParams } from 'react-router-dom';
import MainDisplay from '../components/MainDisplay';

const GenrePage = () => {
  const { genre } = useParams();
  const headerText = `${genre} Games`;
  const queryText = `&genres=${genre}`;
  return (
    <div>
      <MainDisplay header={headerText} query={queryText} />
    </div>
  );
};

export default GenrePage;
