import {
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  FormControl,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const LoginPage = () => {
  return (
    <Grid
      container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5rem',
        marginBottom: '5rem',
      }}
    >
      <Grid
        item
        md={8}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h1">Login Page</Typography>
        <Box sx={{ mt: 10 }}>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '500px',
            }}
          >
            <TextField
              id="outlined-basic"
              label="Username"
              variant="filled"
              sx={{ marginBottom: '4rem', color: 'white' }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              sx={{ marginBottom: '4rem' }}
            />
            <Button variant="contained" type="submit">
              Login
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
