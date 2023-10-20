import { Box, TextField, Button } from '@mui/material';

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
