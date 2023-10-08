import { Box, TextField, Button } from '@mui/material';
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

interface UserFormProps {
  onSubmit: (e: Event) => Promise<void>;
}

const UserForm = ({ onSubmit }: UserFormProps) => {
  return (
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
      </form>
    </Box>
  );
};

export default UserForm;
