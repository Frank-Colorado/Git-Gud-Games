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

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#EE9322',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#EE9322',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#EE9322',
    },
    '&:hover fieldset': {
      borderColor: '#EE9322',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#EE9322',
    },
  },
});

const encodeFileBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

const EditUserForm = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const [image, setImage] = useState(user.avatar);
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  console.log(bio);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const [file] = e.target.files as FileList;
    if (file) {
      const base64 = await encodeFileBase64(file);
      if (typeof base64 === 'string') {
        setImage(base64);
      }
    }
  };

  return (
    <Grid item md={6}>
      <form>
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
          <Box
            sx={{
              overflow: 'hidden',
              height: '20rem',
              width: '75%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Avatar
                variant="square"
                sx={{ width: 300, height: 300 }}
                src={image ? image : undefined}
              />
            </Box>
            <Box>
              <Button component="label" variant="contained" sx={{ mt: 2 }}>
                Upload Avatar Image
                <VisuallyHiddenInput
                  type="file"
                  accept=".jpeg, .png, .jpg"
                  multiple={false}
                  onChange={handleImageUpload}
                />
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '75%',
              color: 'white',
            }}
          >
            <Typography variant="h5" textAlign="start" sx={{ mt: 3 }}>
              Username
            </Typography>
            <StyledTextField
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ mt: 1, width: '100%', input: { color: 'white' } }}
            />
            <Typography variant="h5" textAlign="start" sx={{ mt: 3 }}>
              About Me
            </Typography>
            <StyledTextField
              value={bio ? bio : ''}
              onChange={(e) => setBio(e.target.value)}
              sx={{
                mt: 1,
                width: '100%',
              }}
              placeholder="Tell us about yourself!"
              multiline
              rows={4}
              inputProps={{ style: { color: 'white' } }}
            />
            <Typography variant="h5" textAlign="start" sx={{ mt: 3 }}>
              Password
            </Typography>
            <Button variant="contained" sx={{ mt: 1 }}>
              Change Password
            </Button>
          </Box>
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
              sx={{ width: '6rem', mx: 2 }}
            >
              Cancel
            </Button>
            <Button
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
