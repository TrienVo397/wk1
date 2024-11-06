const CarouselBody = ({imgUrl}) =>{
    return(
        <div style={{backgroundImage: `url(${imgUrl})`}} // for dynamic styling
        className="md:w-full lg:w-1/2 h-full
                   mx-auto
                   bg-center bg-cover duration-500">

        </div>

    )
}
export default CarouselBody