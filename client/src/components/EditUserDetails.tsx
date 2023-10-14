import { useAppDispatch, useAppSelector } from '../hooks';
import { setUsername, setBio } from '../store';
import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

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

const EditUserDetails = () => {
  const dispatch = useAppDispatch();
  const { username, bio } = useAppSelector((state) => state.editUser);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(e.target.value));
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBio(e.target.value));
  };

  return (
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
        onChange={handleUsernameChange}
        sx={{ mt: 1, width: '100%', input: { color: 'white' } }}
      />
      <Typography variant="h5" textAlign="start" sx={{ mt: 3 }}>
        About Me
      </Typography>
      <StyledTextField
        value={bio}
        onChange={handleBioChange}
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
  );
};

export default EditUserDetails;
