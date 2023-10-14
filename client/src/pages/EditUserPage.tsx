import { useEffect } from 'react';
import { useAppDispatch } from '../hooks';
import { Grid } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';
import { setUser } from '../store';
import Auth from '../utils/auth';
import LoginRedirect from '../components/LoginRedirect';
import EditUserForm from '../components/EditUserForm';

const EditUserPage = () => {
  const dispatch = useAppDispatch();
  const { loading, error, data } = useQuery(GET_ME);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data.me));
    }
  }, [data, dispatch]);

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