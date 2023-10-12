import { Box, Grid, Typography } from '@mui/material';

const LibraryItem = () => {
  return (
    <>
      <Grid item xs={6}>
        <Box
          sx={{
            bgcolor: 'purple',
            display: 'flex',
            alignItems: 'center',
            height: 150,
          }}
        >
          <img
            style={{ padding: '2rem' }}
            src="https://picsum.photos/175/125"
            alt="logo"
          />
          <Typography variant="h5" sx={{ color: 'white' }}>
            Game Title
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default LibraryItem;
