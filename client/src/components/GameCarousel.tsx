import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';
import CarouselItem from './CarouselItem';
import { useGetGameScreenShotsQuery } from '../store';

interface GameCarouselProps {
  id: string;
}

const GameCarousel = ({ id }: GameCarouselProps) => {
  const { data, error, isLoading } = useGetGameScreenShotsQuery(id);

  return (
    <Box sx={{ mt: 2 }}>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : data ? (
        <Carousel
          autoPlay={false}
          animation="fade"
          navButtonsAlwaysVisible={true}
          swipe={false}
          height={500}
        >
          {data.map((item) => (
            <CarouselItem key={item.id} item={item} />
          ))}
        </Carousel>
      ) : (
        <div>No screenshots available</div>
      )}
    </Box>
  );
};
export default GameCarousel;
