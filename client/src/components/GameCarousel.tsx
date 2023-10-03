import Carousel from 'react-material-ui-carousel';
import CarouselItem from './CarouselItem';
import { useGetGameScreenShotsQuery } from '../store';

interface GameCarouselProps {
  id: string;
}

const GameCarousel = ({ id }: GameCarouselProps) => {
  const { data, error, isLoading } = useGetGameScreenShotsQuery(id);
  console.log(data, error, isLoading);

  return (
    <div>
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
    </div>
  );
};
export default GameCarousel;
