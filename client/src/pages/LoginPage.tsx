import { Grid, Typography } from '@mui/material';

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
      <Grid item md={8}>
        <Typography variant="h1">Login Page</Typography>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
