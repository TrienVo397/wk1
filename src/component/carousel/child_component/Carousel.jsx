import CarouselBody from "./carousel_body/CarouselBody"
import getImagePaths from "../CarouselApiCall"
import { BACK, NEXT, CarouselButton } from "./carousel_button/CarouselButton";
import useCarouselEventHandlers from "../CarouselEventHandler";
import CarouselNavigationDots from "./carousel_navigation_dot/CarouselNavigationDots";

const images = getImagePaths();
const Carousel =()=>{
    const {currentIndex, goToNext, goToPrevious, goToSlide} = useCarouselEventHandlers(images)
    return(
        <div className="relative w-1/2 mx-auto h-[400px]">
            <CarouselBody imgUrl={images[currentIndex]}/>
            <CarouselButton direction={BACK} onClickButtonAction={goToPrevious}/>
            <CarouselButton direction={NEXT} onClickButtonAction={goToNext}/>
            <CarouselNavigationDots images={images} currentIndex={currentIndex} onClickButtonAction={goToSlide} />
        </div>
    )
}

export default Carousel