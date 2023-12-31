import { useAppDispatch, useAppSelector } from '../hooks';
import { setUsername, setBio } from '../store';
import { Box, TextField, Typography } from '@mui/material';

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
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 5,
      }}
    >
      <Box
        sx={{
          width: '95%',
        }}
      >
        <Typography variant="h5" textAlign="start" sx={{ mt: 3 }}>
          Username
        </Typography>
        <TextField
          value={username}
          onChange={handleUsernameChange}
          sx={{ mt: 1, mb: 3, width: '100%', input: { color: 'white' } }}
        />
        <Typography variant="h5" textAlign="start" sx={{ mt: 3 }}>
          About Me
        </Typography>
        <TextField
          value={bio}
          onChange={handleBioChange}
          sx={{
            mt: 1,
            mb: 3,
            width: '100%',
          }}
          placeholder="Tell us about yourself!"
          multiline
          rows={4}
          inputProps={{ style: { color: 'white' } }}
        />
      </Box>
    </Box>
  );
};

export default EditUserDetails;
