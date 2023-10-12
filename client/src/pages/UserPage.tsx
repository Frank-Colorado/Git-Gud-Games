import { Grid } from '@mui/material';
import UserHeader from '../components/UserHeader';
import UserLibrary from '../components/UserLibrary';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const UserPage = () => {
  const { loading, error, data } = useQuery(GET_ME);
  console.log(data);
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
