import { Grid, Paper } from '@mui/material';
import UserHeader from '../components/UserHeader';
import UserLibrary from '../components/UserLibrary';
import LoginRedirect from '../components/LoginRedirect';
import Auth from '../utils/auth';

const UserPage = () => {
  const loggedIn = Auth.loggedIn();

  if (!loggedIn) {
    return <LoginRedirect />;
  }

  return (
    <Grid
      container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid item md={6} sx={{ mt: 5 }}>
        <Paper
          sx={{
            height: '100%',
            p: 5,
            borderRadius: '1rem',
            boxShadow: '0px 0px 15px #ffffff',
          }}
        >
          <UserHeader />
          <UserLibrary />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserPage;
