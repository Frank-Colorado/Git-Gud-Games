import { Box, Button, Typography } from '@mui/material';

const UserHeader = () => {
  return (
    <div>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'end',
          bgcolor: 'yellow',
        }}
      >
        <Button variant="contained">Edit Profile</Button>
      </Box>
      <Box
        sx={{
          bgcolor: 'orange',
          overflow: 'hidden',
          height: '20rem',

          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            marginLeft: '3rem',
          }}
        >
          <img src="https://picsum.photos/300" alt="logo" />
        </Box>
        <Box
          sx={{
            margin: '2rem',
            bgcolor: 'green',
            height: '95%',
            width: '100%',
          }}
        >
          <Typography variant="h3">Username</Typography>
          <Typography variant="body1" sx={{ marginTop: '2rem' }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
            deserunt delectus suscipit officia nesciunt, pariatur nulla incidunt
            voluptatibus animi expedita, sunt soluta autem quae ea facilis
            perspiciatis! Similique, perspiciatis quibusdam.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default UserHeader;
