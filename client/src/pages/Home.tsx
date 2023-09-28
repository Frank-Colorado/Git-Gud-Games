import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar';
import GamesDisplay from '../components/GamesDisplay';

const Home = () => {
  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid item md={2} sx={{ backgroundColor: 'green' }}>
        <Sidebar />
      </Grid>
      <Grid item md={10} sx={{ backgroundColor: 'blue' }}>
        <Typography variant="h2" sx={{ mb: 2, color: 'white' }} align="center">
          Here's What's Good...
        </Typography>
        <GamesDisplay  />
      </Grid>
    </Grid>
  );
};

export default Home;
