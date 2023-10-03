import { useParams } from 'react-router-dom';
import { useGetGameDetailsQuery } from '../store';
import { Grid, Typography, Box } from '@mui/material';

const GamePage = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Invalid Game ID</div>;
  }

  const { data, error, isLoading } = useGetGameDetailsQuery(id);
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
          Hello
        </Typography>
        <Typography variant="h2" sx={{ mb: 2, color: 'white' }}>
          World
        </Typography>
        <Box sx={{ height: 50, width: '100%', backgroundColor: 'red' }} />
      </Grid>
    </Grid>
  );
};

export default GamePage;
