import { Grid, Box } from '@mui/material';
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
        justifyContent: 'center',
      }}
    >
      <Grid item md={7} sx={{ bgcolor: 'black' }}>
        <UserHeader />
        <UserLibrary />
      </Grid>
    </Grid>
  );
};

export default UserPage;
