import { Box, Grid, Typography } from '@mui/material';
import LibraryItem from './LibraryItem';

const UserLibrary = () => {
  return (
    <>
      <Box sx={{ height: 100, marginLeft: 2 }}>
        <Typography variant="h2" sx={{ color: 'white' }}>
          My Library
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ paddingX: 2 }}>
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
      </Grid>
    </>
  );
};

export default UserLibrary;
