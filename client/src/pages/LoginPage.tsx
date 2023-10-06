import {
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  FormControl,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

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

const LoginPage = () => {
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
      <Box sx={{ mt: 10, border: '1px solid #D83F31 ' }}>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '500px',
            color: 'white',
            padding: '2rem',
          }}
        >
          <StyledTextField
            label="Username"
            sx={{ marginBottom: '3rem' }}
            InputLabelProps={{
              sx: {
                color: '#EE9322',
              },
            }}
          />
          <StyledTextField
            label="Password"
            sx={{ marginBottom: '3rem' }}
            InputLabelProps={{
              sx: {
                color: '#EE9322',
              },
            }}
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
          <Typography variant="subtitle1" sx={{ marginTop: '1rem' }}>
            Don't have an account? Sign up <Link to="/signup">here</Link> !
          </Typography>
        </form>
      </Box>
    </Grid>
  );
};

export default LoginPage;
