import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import UserForm from '../components/UserForm';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';
import { setUser } from '../store';
import Auth from '../utils/auth';

const SignupPage = () => {
  const dispatch = useDispatch();
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
      console.log(data);
      if (data) {
        // if the mutation is successful, we'll handle the token and user data
        //  use auth to set the token to localStorage
        Auth.login(data.createUser.token);
        // then set the redux store state for the user accordingly
        dispatch(setUser(data.createUser.user));
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
        Sign Up
      </Typography>
      <UserForm
        state={formState}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Typography variant="subtitle1" sx={{ marginTop: '1rem' }}>
        Already have an account? Login <Link to="/login">here</Link> !
      </Typography>
    </Grid>
  );
};

export default SignupPage;
