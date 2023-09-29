import { Grid, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import GamesDisplay from './GamesDisplay';
import { GameApiQuery } from '../store';

interface MainDisplayProps {
  header: string;
  query: string;
  gamesQuery: GameApiQuery;
}

const MainDisplay = ({ header, query, gamesQuery }: MainDisplayProps) => {
  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid item md={2} sx={{ backgroundColor: 'green' }}>
        <Sidebar />
      </Grid>
      <Grid item md={10} sx={{ backgroundColor: 'blue' }}>
        <Typography variant="h2" sx={{ mb: 2, color: 'white' }} align="center">
          {header}
        </Typography>
        <GamesDisplay query={query} gamesQuery={gamesQuery} />
      </Grid>
    </Grid>
  );
};

export default MainDisplay;
