import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useGetGamesQuery } from '../store';
import GameCard from './GameCard';

interface GamesDisplayProps {
  query: string;
}

const GamesDisplay = ({ query }: GamesDisplayProps) => {
  const { data, error, isFetching } = useGetGamesQuery(query);
  console.log(data, error, isFetching);

  const Fetching = (
    <Grid item xs={12}>
      <Typography variant="h3" component="div">
        Fetching...
      </Typography>
    </Grid>
  );

  const Error = (
    <Grid item xs={12}>
      <Typography variant="h3" component="div">
        Error...
      </Typography>
    </Grid>
  );

  return (
    <Grid
      container
      rowSpacing={7}
      sx={{ paddingLeft: '2rem', paddingRight: '2rem' }}
    >
      {isFetching && Fetching}
      {error && Error}
      {data?.length === 0 ? (
        <div> no games found </div>
      ) : (
        data?.map((game) => <GameCard key={game.id} game={game} />)
      )}
    </Grid>
  );
};

export default GamesDisplay;
