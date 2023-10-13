import { useEffect } from 'react';
import { useAppDispatch } from '../hooks';
import { Grid, Typography, Box } from '@mui/material';
import UserHeader from '../components/UserHeader';
import UserLibrary from '../components/UserLibrary';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';
import { setUser } from '../store';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

const UserPage = () => {
  const dispatch = useAppDispatch();
  const { loading, error, data } = useQuery(GET_ME);
  const loggedIn = Auth.loggedIn();

  if (!loggedIn) {
    return (
      <Box
        sx={{
          mt: 15,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" sx={{ color: 'white', mb: 5 }}>
          You need to be logged in to view this page.
        </Typography>
        <Typography
          component={Link}
          to="/login"
          variant="h3"
          sx={{
            color: 'red',
            cursor: 'pointer',
            textDecoration: 'none',
            '&:hover': {
              color: 'yellow',
            },
          }}
        >
          Login
        </Typography>
      </Box>
    );
  }

  useEffect(() => {
    if (data) {
      dispatch(setUser(data.me));
    }
  }, [data, dispatch]);

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
