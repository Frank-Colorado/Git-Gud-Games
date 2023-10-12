import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations';
import Auth from '../utils/auth';
import UserForm from '../components/UserForm';

const LoginPage = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });
  const [login, { error }] = useMutation(LOGIN);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: { input: { ...formState } },
      });
      if (data) {
        //  use auth to set the token to localStorage
        Auth.login(data.login.token);
      }
    } catch (err) {
      console.error(err);
    }
    setFormState({
      username: '',
      password: '',
    });
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
      <UserForm
        state={formState}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Typography variant="subtitle1" sx={{ marginTop: '1rem' }}>
        {error && <Typography color="error">{error.message}</Typography>}
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: '1rem' }}>
        Don't have an account? Sign up <Link to="/signup">here</Link> !
      </Typography>
    </Grid>
  );
};

export default LoginPage;
