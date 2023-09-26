import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={2}>
        <Box sx={{ height: '100vh', width: '100vw', backgroundColor: 'red' }} />
      </Grid>
      <Grid item md={10}>
        <Box
          sx={{ height: '100vh', width: '100vw', backgroundColor: 'blue' }}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
