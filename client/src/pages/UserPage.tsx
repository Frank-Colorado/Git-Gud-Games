import { Grid, Input, Box, Typography, Button } from '@mui/material';
import UserHeader from '../components/UserHeader';
import UserLibrary from '../components/UserLibrary';

const UserPage = () => {
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
