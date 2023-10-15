import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
} from '@mui/material';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../graphql/mutations';
import { setUser } from '../store';
import { setForm } from '../store';
import { Link } from 'react-router-dom';
import EditUserAvatar from './EditUserAvatar';
import EditUserDetails from './EditUserDetails';

const EditUserForm = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const userDetails = {
    username: user.username,
    bio: user.bio,
    avatar: user.avatar,
  };
  const editUserForm = useAppSelector((state) => state.editUser);

  const [updateUser, { error }] = useMutation(UPDATE_USER, {
    onCompleted: (data) => {
      dispatch(setUser(data.updateUser));
    },
  });

  useEffect(() => {
    dispatch(setForm(userDetails));
  }, [user, dispatch]);

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setForm(userDetails));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await updateUser({
        variables: {
          input: {
            username: editUserForm.username,
            bio: editUserForm.bio,
            avatar: editUserForm.avatar,
          },
        },
      });
      console.log(data?.updateUser);
    } catch (err) {
      console.error({ err });
    }
  };

  return (
    <Grid item md={6}>
      <form onSubmit={handleFormSubmit}>
        <Box
          sx={{
            mt: 10,
            border: '1px solid #D83F31',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: 'black',
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'end',
            }}
          >
            <Typography
              component={Link}
              to="/profile"
              variant="button"
              sx={{
                m: 2,
                color: 'red',
                cursor: 'pointer',
                borderBottom: '1px solid white',
                textDecoration: 'none',
                '&:hover': {
                  color: 'yellow',
                },
              }}
            >
              Back To Profile
            </Typography>
          </Box>
          <EditUserAvatar />
          <EditUserDetails />
          <Box
            sx={{
              mt: 3,
              mb: 10,
              width: '75%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={handleCancel}
              sx={{ width: '6rem', mx: 2 }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{ width: '6rem', mx: 2 }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </form>
    </Grid>
  );
};

export default EditUserForm;
