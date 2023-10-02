import Grid from '@mui/material/Grid';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';
import { useGetGamesQuery } from '../store';
import GameCard from './GameCard';

interface GamesDisplayProps {
  query: string;
}

const GamesDisplay = ({ query }: GamesDisplayProps) => {
  const { data, error, isFetching } = useGetGamesQuery(query);

  return (
    <Grid
      container
      rowSpacing={7}
      sx={{ paddingLeft: '2rem', paddingRight: '2rem' }}
    >
      {isFetching && <div>loading...</div>}
      {error && <div>error...</div>}
      {data ? (
        data.map((game) => <GameCard key={game.id} game={game} />)
      ) : (
        <div>no games found</div>
      )}
    </Grid>
  );
};

export default GamesDisplay;
