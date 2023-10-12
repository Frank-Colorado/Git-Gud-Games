import { useAppSelector } from '../hooks';
import { Box, Grid, Typography } from '@mui/material';
import LibraryItem from './LibraryItem';

const UserLibrary = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <>
      <Box sx={{ height: 100, marginLeft: 2 }}>
        <Typography variant="h2" sx={{ color: 'white' }}>
          My Library
        </Typography>
      </Box>
      {user.gameLibrary.length > 0 ? (
        <Grid container spacing={2} sx={{ paddingX: 2 }}>
          {user.gameLibrary.map((game) => (
            <div key={game.id}>
              <LibraryItem game={game} />
            </div>
          ))}
        </Grid>
      ) : (
        <Typography variant="h5" textAlign="center" sx={{ color: 'white' }}>
          You don't have any games in your library yet!
        </Typography>
      )}
    </>
  );
};

export default UserLibrary;
