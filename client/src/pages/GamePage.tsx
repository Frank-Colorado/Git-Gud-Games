import { useParams } from 'react-router-dom';
import { useGetGameDetailsQuery } from '../store';
import { Grid, Typography, Box, Paper, Button } from '@mui/material';
import GameCarousel from '../components/GameCarousel';
import GameDetails from '../components/GameDetails';
import GameDeals from '../components/GameDeals';

const GamePage = () => {
  const { gameId } = useParams();

  if (!gameId) {
    return <div>This Game Does Not Exist</div>;
  }

  const { data, error, isLoading } = useGetGameDetailsQuery(gameId);
  console.log(data, error, isLoading);

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
        marginTop: '5rem',
        marginBottom: '5rem',
      }}
    >
      <Grid item md={8}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h3" sx={{ color: 'white' }}>
            {data?.name}
          </Typography>
          <Button variant="contained" color="primary">
            Add to Library
          </Button>
        </div>
        <Grid container spacing={3}>
          <Grid item md={8}>
            <GameCarousel id={gameId} />
            <GameDeals />
          </Grid>
          <Grid item md={4}>
            <GameDetails details={data} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GamePage;
