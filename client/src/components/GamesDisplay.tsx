import Grid from '@mui/material/Grid';

import { useGetGamesQuery } from '../store';
import GameCard from './GameCard';

interface GamesDisplayProps {
  query: string;
}

const GamesDisplay = ({ query }: GamesDisplayProps) => {
  const { data, error, isFetching } = useGetGamesQuery(query);
  console.log(data, error, isFetching);

  return (
    <Grid
      container
      rowSpacing={7}
      sx={{ paddingLeft: '2rem', paddingRight: '2rem' }}
    >
      {isFetching && <div>loading...</div>}
      {error && <div>error...</div>}
      {data?.length === 0 ? (
        <div> no games found </div>
      ) : (
        data?.map((game) => <GameCard key={game.id} game={game} />)
      )}
    </Grid>
  );
};

export default GamesDisplay;
