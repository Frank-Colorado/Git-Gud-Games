import { Box, Button, Typography } from '@mui/material';

const UserHeader = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <Button variant="contained" sx={{ m: 2 }}>
          Edit Profile
        </Button>
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
          <img src="https://picsum.photos/300" alt="logo" />
        </Box>
        <Box
          sx={{
            margin: '2rem',

            height: '95%',
            width: '100%',
          }}
        >
          <Typography variant="h3" sx={{ color: 'white' }}>
            Username
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: '2rem', color: 'white' }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
            deserunt delectus suscipit officia nesciunt, pariatur nulla incidunt
            voluptatibus animi expedita, sunt soluta autem quae ea facilis
            perspiciatis! Similique, perspiciatis quibusdam.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default UserHeader;
