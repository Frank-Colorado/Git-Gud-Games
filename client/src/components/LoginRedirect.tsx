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
      <Typography
        variant="h3"
        color="primary"
        sx={{
          fontSize: '2rem',
          mb: 5,
        }}
      >
        You need to be logged in to view this page.
      </Typography>
      <Typography
        component={Link}
        to="/login"
        variant="button"
        color="secondary"
        sx={{
          fontSize: '1.25rem',
          borderBottom: '1px solid white',
          textDecoration: 'none',
          '&:hover': {
            color: '#ffffff',
          },
        }}
      >
        Login
      </Typography>
    </Box>
  );
};

export default LoginRedirect;
