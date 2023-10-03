import { useParams } from 'react-router-dom';
import { useGetGameDetailsQuery } from '../store';
import { Grid, Typography, Box, Paper } from '@mui/material';
import GameCarousel from '../components/GameCarousel';

const GamePage = () => {
  const { gameId } = useParams();

  if (!gameId) {
    return <div>This Game Does Not Exist</div>;
  }

  const { data, error, isLoading } = useGetGameDetailsQuery(gameId);
  console.log(data, error, isLoading);

  return (
    <Grid
      container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid item md={8}>
        <Typography variant="h2" sx={{ mb: 2, color: 'white' }}>
          {data?.name}
        </Typography>
        <GameCarousel id={gameId} />
      </Grid>
    </Grid>
  );
};

export default GamePage;
