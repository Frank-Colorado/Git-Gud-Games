import { GameScreenShotsType } from '../store';

interface CarouselItemProps {
  item: GameScreenShotsType;
}

const CarouselItem = ({ item }: CarouselItemProps) => {
  return (
    <div>
      <img
        src={item.image}
        style={{ height: '100%', width: '100%' }}
        alt="carousel-item"
      />
    </div>
  );
};

export default CarouselItem;
