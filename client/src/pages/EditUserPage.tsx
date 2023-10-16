import { Grid } from '@mui/material';
import Auth from '../utils/auth';
import LoginRedirect from '../components/LoginRedirect';
import EditUserForm from '../components/EditUserForm';

const EditUserPage = () => {
  const loggedIn = Auth.loggedIn();

  if (!loggedIn) {
    return <LoginRedirect />;
  }
  return (
    <Grid container sx={{ height: '100vh', justifyContent: 'center' }}>
      <EditUserForm />
    </Grid>
  );
};

export default EditUserPage;
