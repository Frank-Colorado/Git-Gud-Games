import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Sidebar from '../components/Sidebar';
import GamesDisplay from '../components/GamesDisplay';
import { GameApiQuery } from '../store';

interface HomeProps {
  gamesQuery: GameApiQuery;
}

const Home = ({ gamesQuery }: HomeProps) => {
  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid item md={2} sx={{ backgroundColor: 'green' }}>
        <Sidebar />
      </Grid>
      <Grid item md={10} sx={{ backgroundColor: 'blue' }}>
        <Typography variant="h2" sx={{ mb: 2, color: 'white' }} align="center">
          Here's What's Good...
        </Typography>
        <GamesDisplay gamesQuery={gamesQuery} />
      </Grid>
    </Grid>
  );
};

export default Home;
