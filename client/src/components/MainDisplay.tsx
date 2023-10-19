import { Grid, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import GamesDisplay from './GamesDisplay';

interface MainDisplayProps {
  header: string;
  query: string;
}

const MainDisplay = ({ header, query }: MainDisplayProps) => {
  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid item md={2}>
        <Sidebar />
      </Grid>
      <Grid item md={10}>
        <Typography
          variant="h2"
          color="secondary"
          sx={{ mt: 3, mb: 2 }}
          align="center"
        >
          {header}
        </Typography>
        <GamesDisplay query={query} />;
      </Grid>
    </Grid>
  );
};

export default MainDisplay;
