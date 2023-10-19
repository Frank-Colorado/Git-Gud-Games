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
        <Typography variant="h5" color="secondary">
          Deals
        </Typography>
        <Typography variant="h4">
          Retail Price: ${newData[0].retailPrice}
        </Typography>
      </div>
      {newData.map((deal) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',

            marginBottom: '1rem',
            borderRadius: '0.25rem',
          }}
          key={deal.dealID}
        >
          <Typography variant="h4" sx={{ color: 'white' }}>
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
              variant="text"
              sx={{
                height: '2.5rem',
                width: '7rem',
                '&:hover': {
                  backgroundColor: '#000000',
                  color: '#ea526f',
                },
              }}
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
