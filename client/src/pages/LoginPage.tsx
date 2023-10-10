import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import UserForm from '../components/UserForm';

const LoginPage = () => {
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
        Login
      </Typography>

      <Typography variant="subtitle1" sx={{ marginTop: '1rem' }}>
        Don't have an account? Sign up <Link to="/signup">here</Link> !
      </Typography>
    </Grid>
  );
};

export default LoginPage;
