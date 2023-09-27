import Grid from '@mui/material/Grid';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';

const GamesDisplay = () => {
  return (
    <Grid
      container
      rowSpacing={7}
      sx={{ paddingLeft: '2rem', paddingRight: '2rem' }}
    >
      <Grid item xs={3}>
        <Card sx={{ maxHeight: '20rem', maxWidth: '22rem' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Game 1
            </Typography>
            <Box sx={{ height: '500px', backgroundColor: 'red' }} />
          </CardContent>
          <CardActions>
            <Button size="small">View</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ maxHeight: '20rem', maxWidth: '22rem' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Game 1
            </Typography>
            <Box sx={{ height: '500px', backgroundColor: 'red' }} />
          </CardContent>
          <CardActions>
            <Button size="small">View</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ maxHeight: '20rem', maxWidth: '22rem' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Game 1
            </Typography>
            <Box sx={{ height: '500px', backgroundColor: 'red' }} />
          </CardContent>
          <CardActions>
            <Button size="small">View</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ maxHeight: '20rem', maxWidth: '22rem' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Game 1
            </Typography>
            <Box sx={{ height: '500px', backgroundColor: 'red' }} />
          </CardContent>
          <CardActions>
            <Button size="small">View</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default GamesDisplay;