import { Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// const StyledTextField = styled(TextField)({
//   '& label.Mui-focused': {
//     color: '#EE9322',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: '#EE9322',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: '#EE9322',
//     },
//     '&:hover fieldset': {
//       borderColor: '#EE9322',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: '#EE9322',
//     },
//   },
// });

interface UserFormProps {
  state: { username: string; password: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const UserForm = ({ state, onChange, onSubmit }: UserFormProps) => {
  return (
    <Box>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '500px',
          padding: '2rem',
        }}
        onSubmit={onSubmit}
      >
        <TextField
          label="Username"
          name="username"
          value={state.username}
          onChange={onChange}
          sx={{ marginBottom: '3rem' }}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={state.password}
          onChange={onChange}
          sx={{ marginBottom: '3rem' }}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default UserForm;
