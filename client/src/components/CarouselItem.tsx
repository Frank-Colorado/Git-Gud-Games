import { GameScreenShotsType } from '../store';

interface CarouselItemProps {
  item: GameScreenShotsType;
}

const CarouselItem = ({ item }: CarouselItemProps) => {
  return (
    <div>
      <img src={item.image} alt="carousel-item" />
    </div>
  );
};

export default CarouselItem;
