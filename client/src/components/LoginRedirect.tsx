import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginRedirect = () => {
  return (
    <Box
      sx={{
        mt: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3" sx={{ color: 'white', mb: 5 }}>
        You need to be logged in to view this page.
      </Typography>
      <Typography
        component={Link}
        to="/login"
        variant="h3"
        sx={{
          color: 'red',
          cursor: 'pointer',
          textDecoration: 'none',
          '&:hover': {
            color: 'yellow',
          },
        }}
      >
        Login
      </Typography>
    </Box>
  );
};

export default LoginRedirect;
