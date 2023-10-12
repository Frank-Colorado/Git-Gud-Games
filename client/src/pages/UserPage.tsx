import { useEffect } from 'react';
import { useAppDispatch } from '../hooks';
import { Grid } from '@mui/material';
import UserHeader from '../components/UserHeader';
import UserLibrary from '../components/UserLibrary';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';
import { setUser } from '../store';

const UserPage = () => {
  const dispatch = useAppDispatch();
  const { loading, error, data } = useQuery(GET_ME);

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
