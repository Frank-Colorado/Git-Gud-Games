import { useState } from 'react';
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
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import EditUserAvatar from './EditUserAvatar';
import EditUserDetails from './EditUserDetails';

const EditUserForm = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const [image, setImage] = useState(user.avatar);
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setImage(user.avatar);
    setUsername(user.username);
    setBio(user.bio);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      username,
      bio,
      avatar: image,
    };

    console.log(formData);
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
              onClick={handleCancel}
              variant="contained"
              color="error"
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
