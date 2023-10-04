import { Box } from '@mui/material';
import { useGetGameDealsQuery } from '../store';

interface GameDealsProps {
  gameTitle: string;
}

const GameDeals = ({ gameTitle }: GameDealsProps) => {
  const { data, error, isLoading } = useGetGameDealsQuery(gameTitle);
  console.log(data, error, isLoading);

  return (
    <Box sx={{ mt: 2 }}>
      <h1>Game Deals</h1>
    </Box>
  );
};

export default GameDeals;
