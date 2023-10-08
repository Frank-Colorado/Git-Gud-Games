import { Grid, Typography, Box, Button } from '@mui/material';

import { Link } from 'react-router-dom';
import UserForm from '../components/UserForm';

const SignupPage = () => {
  const handleSubmit = async (e: Event) => {
    e.preventDefault();
  };
  return (
    <Grid
      container
      sx={{
        height: 700,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" sx={{ color: '#D83F31' }}>
        Sign Up
      </Typography>
      <UserForm onSubmit={handleSubmit} />
      <Typography variant="subtitle1" sx={{ marginTop: '1rem' }}>
        Already have an account? Login <Link to="/login">here</Link> !
      </Typography>
    </Grid>
  );
};

export default SignupPage;
