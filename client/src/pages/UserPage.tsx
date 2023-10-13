import { useEffect } from 'react';
import { useAppDispatch } from '../hooks';
import { Grid, Typography, Box } from '@mui/material';
import UserHeader from '../components/UserHeader';
import UserLibrary from '../components/UserLibrary';
import LoginRedirect from '../components/LoginRedirect';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';
import { setUser } from '../store';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

const UserPage = () => {
  const dispatch = useAppDispatch();
  const { loading, error, data } = useQuery(GET_ME);
  const loggedIn = Auth.loggedIn();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data.me));
    }
  }, [data, dispatch]);

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
