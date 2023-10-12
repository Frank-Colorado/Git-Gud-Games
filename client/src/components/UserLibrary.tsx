import { Box, Grid, Typography } from '@mui/material';

const UserLibrary = () => {
  return (
    <>
      <Box sx={{ height: 100, marginLeft: 2 }}>
        <Typography variant="h2" sx={{ color: 'white' }}>
          My Library
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ paddingX: 2 }}>
        <Grid item xs={6}>
          <Box
            sx={{
              bgcolor: 'purple',
              display: 'flex',
              alignItems: 'center',
              height: 150,
            }}
          >
            <img
              style={{ padding: '2rem' }}
              src="https://picsum.photos/175/125"
              alt="logo"
            />
            <Typography variant="h5" sx={{ color: 'white' }}>
              Game Title
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              bgcolor: 'purple',
              display: 'flex',
              alignItems: 'center',
              height: 150,
            }}
          >
            <img
              style={{ padding: '2rem' }}
              src="https://picsum.photos/175/125"
              alt="logo"
            />
            <Typography variant="h5" sx={{ color: 'white' }}>
              Game Title
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              bgcolor: 'purple',
              display: 'flex',
              alignItems: 'center',
              height: 150,
            }}
          >
            <img
              style={{ padding: '2rem' }}
              src="https://picsum.photos/175/125"
              alt="logo"
            />
            <Typography variant="h5" sx={{ color: 'white' }}>
              Game Title
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              bgcolor: 'purple',
              display: 'flex',
              alignItems: 'center',
              height: 150,
            }}
          >
            <img
              style={{ padding: '2rem' }}
              src="https://picsum.photos/175/125"
              alt="logo"
            />
            <Typography variant="h5" sx={{ color: 'white' }}>
              Game Title
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default UserLibrary;
