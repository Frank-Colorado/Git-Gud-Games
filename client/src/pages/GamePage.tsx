import { useParams } from 'react-router-dom';
import { useGetGameDetailsQuery } from '../store';
import Carousel from 'react-material-ui-carousel';
import { Grid, Typography, Box, Paper } from '@mui/material';

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
        <Carousel
          autoPlay={false}
          animation="fade"
          navButtonsAlwaysVisible={true}
          swipe={false}
          height={500}
        ></Carousel>
      </Grid>
    </Grid>
  );
};

export default GamePage;
