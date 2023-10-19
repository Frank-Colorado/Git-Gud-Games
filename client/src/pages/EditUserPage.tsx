import { Grid, Paper } from '@mui/material';
import Auth from '../utils/auth';
import LoginRedirect from '../components/LoginRedirect';
import EditUserForm from '../components/EditUserForm';

const EditUserPage = () => {
  const loggedIn = Auth.loggedIn();

  if (!loggedIn) {
    return <LoginRedirect />;
  }
  return (
    <Grid
      container
      sx={{ height: '100vh', display: 'flex', justifyContent: 'center' }}
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
          <EditUserForm />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default EditUserPage;
