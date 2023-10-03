interface CarouselItemProps {
  item: string;
}

const CarouselItem = ({ item }: CarouselItemProps) => {
  return (
    <div>
      <img src={item} alt="carousel-item" />
    </div>
  );
};

export default CarouselItem;
