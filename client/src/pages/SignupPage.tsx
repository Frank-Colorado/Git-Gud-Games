import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';
import Auth from '../utils/auth';
import UserForm from '../components/UserForm';

const SignupPage = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });
  const [createUser, { error }] = useMutation(CREATE_USER);

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
      const { data } = await createUser({
        variables: { input: { ...formState } },
      });
      if (data) {
        //  use auth to set the token to localStorage
        Auth.login(data.createUser.token);
      }
    } catch (error: any) {
      console.error(error);
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
        Sign Up
      </Typography>
      <UserForm
        state={formState}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Typography variant="subtitle1" sx={{ marginTop: '1rem' }}>
        {error && <Typography color="error">{error.message}</Typography>}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="subtitle1"
          color="primary"
          sx={{ marginTop: '1rem' }}
        >
          Already have an account?
        </Typography>
        <Typography
          component={Link}
          to="/login"
          color="secondary"
          sx={{
            fontSize: '1rem',
            textDecoration: 'none',
            borderBottom: '1px solid white',
            '&:hover': {
              color: '#ffffff',
            },
          }}
        >
          Login Here!
        </Typography>
      </Box>
    </Grid>
  );
};

export default SignupPage;
