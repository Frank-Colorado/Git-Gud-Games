import { useAppSelector } from '../hooks';
import { Box, Grid, Typography } from '@mui/material';
import LibraryItem from './LibraryItem';

const UserLibrary = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 5,
      }}
    >
      <Box
        sx={{
          width: '95%',
        }}
      >
        <Typography variant="h5" textAlign="start" sx={{ mt: 3 }}>
          My Library
        </Typography>
        {user.gameLibrary.length > 0 ? (
          <Grid
            container
            rowSpacing={5}
            sx={{
              marginTop: 1,
            }}
          >
            {user.gameLibrary.map((game) => (
              <LibraryItem key={game.id} game={game} />
            ))}
          </Grid>
        ) : (
          <Typography variant="h5" textAlign="center" sx={{ color: 'white' }}>
            You don't have any games in your library yet!
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default UserLibrary;
