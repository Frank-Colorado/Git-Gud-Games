import { useEffect } from 'react';
import { useAppDispatch } from '../hooks';
import { Grid } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';
import { setUser } from '../store';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import LoginRedirect from '../components/LoginRedirect';

const EditUserPage = () => {
  const loggedIn = Auth.loggedIn();

  if (!loggedIn) {
    return <LoginRedirect />;
  }
  return (
    <Grid container sx={{ height: '100vh', justifyContent: 'center' }}>
      <Grid item md={7} sx={{ bgcolor: 'black' }}>
        User Form Component
      </Grid>
    </Grid>
  );
};

export default EditUserPage;
