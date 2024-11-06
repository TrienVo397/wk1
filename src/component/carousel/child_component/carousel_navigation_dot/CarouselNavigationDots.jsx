const CarouselNavigationDots = ({
  images,
  currentIndex,
  onClickButtonAction,
}) => {
  return (
    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2
 ">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => onClickButtonAction(index)}
          className={`h-3 w-3 rounded-full ${
            index === currentIndex ? "bg-white" : "bg-gray-50 opacity-40"
          }`}
        ></button>
      ))}
    </div>
  );
};

export default CarouselNavigationDots;
