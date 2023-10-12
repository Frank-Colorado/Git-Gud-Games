import { useParams } from 'react-router-dom';
import { useGetGameDetailsQuery } from '../store';
import { Grid } from '@mui/material';
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
        <GameHeader data={data} />
        <Grid container spacing={4}>
          <Grid item md={8}>
            <GameCarousel id={gameId} />
            <GameDeals gameTitle={data.slug} />
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
