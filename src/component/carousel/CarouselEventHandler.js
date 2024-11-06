import { useEffect, useState } from "react";

const useCarouselEventHandlers = (images) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);
  
  const goToPrevious = () => {
      const backIndex = currentIndex ===0 ? images.length-1 : currentIndex -1;
      setCurrentIndex(backIndex);
    }
    const goToNext =()=>{
        const nextIndex = currentIndex === images.length-1 ? 0 : currentIndex +1;
        setCurrentIndex(nextIndex)
    }
    const goToSlide =(index) =>{
      setCurrentIndex(index);
    }
    return {currentIndex, goToNext, goToPrevious, goToSlide };
    
};
export default useCarouselEventHandlers;
