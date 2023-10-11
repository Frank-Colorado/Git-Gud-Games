import { Grid, Input, Box, Typography, Button } from '@mui/material';

const UserPage = () => {
  return (
    <Grid
      container
      sx={{
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      <Grid item md={7} sx={{ bgcolor: 'red' }}>
        <Box sx={{ height: 100, marginLeft: 2 }}>
          <Typography variant="h2">My Library</Typography>
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
      </Grid>
    </Grid>
  );
};

export default UserPage;
