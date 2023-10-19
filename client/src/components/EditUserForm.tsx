import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { Grid, Box, Button, Typography } from '@mui/material';
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

  const [updateUser, { error }] = useMutation(UPDATE_USER);

  useEffect(() => {
    dispatch(setForm(userDetails));
  }, [user]);

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setForm(userDetails));
  };

  const handleFormSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const formValues = {
      username: editUserForm.username,
      bio: editUserForm.bio,
      avatar: editUserForm.avatar,
    };

    try {
      const { data } = await updateUser({
        variables: {
          input: formValues,
        },
      });

      if (data) {
        dispatch(setUser(data.updateUser));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Grid item md={6}>
      <div>
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
              color="secondary"
              sx={{
                m: 2,
                borderBottom: '1px solid white',
                textDecoration: 'none',
                '&:hover': {
                  color: '#ffffff',
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
              color="secondary"
              onClick={handleCancel}
              sx={{ width: '6rem', mx: 2, fontWeight: 'bold' }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleFormSubmit}
              variant="contained"
              color="primary"
              sx={{ width: '6rem', mx: 2, fontWeight: 'bold' }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </div>
    </Grid>
  );
};

export default EditUserForm;
