import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface LibraryItemProps {
  game: {
    id: number;
    name: string;
    image: string;
  };
}

const LibraryItem = ({ game }: LibraryItemProps) => {
  return (
    <>
      <Grid item xs={6}>
        <Box
          sx={{
            bgcolor: 'purple',
            display: 'flex',
            alignItems: 'center',
            height: 150,
          }}
        >
          <img style={{ padding: '2rem' }} src={game.image} alt="logo" />
          <Link to="/game/${game.id}" style={{ textDecoration: 'none' }}>
            <Typography variant="h5" sx={{ color: 'white' }}>
              {game.name}
            </Typography>
          </Link>
        </Box>
      </Grid>
    </>
  );
};

export default LibraryItem;
