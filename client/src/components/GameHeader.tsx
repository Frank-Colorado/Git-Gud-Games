import { Box, Typography, Button } from '@mui/material';
import { GameDetailsType } from '../store/apis/gamesApi';

interface GameHeaderProps {
  data: GameDetailsType;
}

const GameHeader = ({ data }: GameHeaderProps) => {
  const handleClick = () => {
    // Game will be added to the user's library if they are logged in
    console.log('Add to Library Clicked', data.id);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h3" sx={{ color: 'white' }}>
        {data.name}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Add to Library
      </Button>
    </Box>
  );
};

export default GameHeader;
