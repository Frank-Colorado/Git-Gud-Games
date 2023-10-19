import { Box, Button, Typography, Avatar } from '@mui/material';
import { useAppSelector } from '../hooks';
import { Link } from 'react-router-dom';

const UserHeader = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <Typography
          component={Link}
          to="/profile/edit"
          variant="button"
          color="secondary"
          sx={{
            m: 2,
            borderBottom: '1px solid white',
            textDecoration: 'none',
            '&:hover': {
              color: '#ffffff',
            },
          }}
        >
          Edit Profile
        </Typography>
      </Box>
      <Box
        sx={{
          overflow: 'hidden',
          height: '20rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            marginLeft: 3,
          }}
        >
          <Avatar
            variant="square"
            sx={{ width: 300, height: 300, border: '2px solid #ffffff' }}
            src={user.avatar ? user.avatar : ''}
          />
        </Box>
        <Box
          sx={{
            margin: '5rem',
            height: '95%',
            width: '50%',
          }}
        >
          <Typography variant="h3" sx={{ color: 'white' }}>
            {user.username}
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: '2rem', color: 'white' }}
          >
            {user.bio ? user.bio : "This user doesn't have a bio yet!"}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default UserHeader;
