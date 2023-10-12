import { Box, Typography, Button } from '@mui/material';
import { useGetGameDealsQuery, useGetStoresQuery } from '../store';

interface GameDealsProps {
  gameTitle: string;
}

const GameDeals = ({ gameTitle }: GameDealsProps) => {
  const { data, error, isLoading } = useGetGameDealsQuery(gameTitle);
  const storesList = useGetStoresQuery();
  const storeData = storesList.data;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ color: 'white', mt: 5 }}
      >
        {' '}
        Something went wrong getting deals for this game :(
      </Typography>
    );
  }

  if (!data) {
    return (
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ color: 'white', mt: 5 }}
      >
        {' '}
        No Deals Found{' '}
      </Typography>
    );
  }

  const newData = data.deals.map((deal) => {
    const store = storeData?.find((store) => store.storeID === deal.storeID);
    return { ...deal, storeName: store?.storeName };
  });

  return (
    <Box sx={{ mt: 2 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '2rem',
        }}
      >
        <Typography variant="h4" sx={{ color: 'white' }}>
          Deals
        </Typography>
        <Typography variant="h4" sx={{ color: 'white' }}>
          Retail Price: ${newData[0].retailPrice}
        </Typography>
      </div>
      {newData.map((deal) => (
        <div
          style={{ display: 'flex', justifyContent: 'space-between' }}
          key={deal.dealID}
        >
          <Typography variant="h5" sx={{ color: 'white' }}>
            {deal.storeName}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'black',
              width: '25%',
              justifyContent: 'center',
              borderRadius: '0.25rem',
              mb: 2,
            }}
          >
            <Box sx={{ width: '5rem', mx: 2 }}>
              <Typography variant="h6" sx={{ color: 'white' }}>
                ${deal.price}
              </Typography>
            </Box>
            <Button
              href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}
              target="_blank"
              color="primary"
              sx={{ height: '2.5rem', width: '7rem' }}
            >
              Get Deal
            </Button>
          </Box>
        </div>
      ))}
    </Box>
  );
};

export default GameDeals;
