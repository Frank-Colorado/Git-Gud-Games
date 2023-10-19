import { useParams } from 'react-router-dom';
import { useGetGameDetailsQuery } from '../store';
import { Grid, Typography, Paper } from '@mui/material';
import GameHeader from '../components/GameHeader';
import GameCarousel from '../components/GameCarousel';
import GameDetails from '../components/GameDetails';
import GameDeals from '../components/GameDeals';

const GamePage = () => {
  const { gameId } = useParams();

  if (!gameId) {
    return <div>This Game Does Not Exist</div>;
  }

  const { data, error, isLoading } = useGetGameDetailsQuery(gameId);

  if (isLoading) {
    return (
      <Typography variant="h3" textAlign="center" sx={{ color: 'white' }}>
        Loading...
      </Typography>
    );
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  if (!data) {
    return <div> No Game Found </div>;
  }

  return (
    <Grid
      container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid item md={8} sx={{ mt: 5 }}>
        <Paper
          sx={{
            height: '100%',
            p: 5,
            borderRadius: '1rem',
          }}
        >
          <GameHeader details={data} />
          <Grid container spacing={4}>
            <Grid item md={8}>
              <GameCarousel id={gameId} />
              <GameDeals gameTitle={data.slug} />
            </Grid>
            <Grid item md={4}>
              <GameDetails details={data} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default GamePage;
