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
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'end',
            bgcolor: 'yellow',
          }}
        >
          <Button variant="contained">Edit Profile</Button>
        </Box>
        <Box
          sx={{
            bgcolor: 'orange',
            overflow: 'hidden',
            height: '20rem',

            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              marginLeft: '3rem',
            }}
          >
            <img src="https://picsum.photos/300" alt="logo" />
          </Box>
          <Box
            sx={{
              margin: '2rem',
              bgcolor: 'green',
              height: '95%',
              width: '100%',
            }}
          >
            <Typography variant="h3">Username</Typography>
            <Typography variant="body1" sx={{ marginTop: '2rem' }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
              deserunt delectus suscipit officia nesciunt, pariatur nulla
              incidunt voluptatibus animi expedita, sunt soluta autem quae ea
              facilis perspiciatis! Similique, perspiciatis quibusdam.
            </Typography>
          </Box>
        </Box>
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
