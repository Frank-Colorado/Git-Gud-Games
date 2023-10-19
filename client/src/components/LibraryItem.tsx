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
            bgcolor: 'black',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            border: '1px solid white',
            p: 1,
          }}
        >
          <img
            style={{ width: '150px', height: '100px' }}
            src={game.image}
            alt="logo"
          />
          <Typography
            component={Link}
            to={`/game/${game.id}`}
            variant="h4"
            color="primary"
            sx={{
              ml: 2,
              textDecoration: 'none',
              '&:hover': {
                color: '#ea526f',
              },
            }}
          >
            {game.name}
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default LibraryItem;
