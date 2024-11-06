import React from 'react'

const BACK = 'back'
const NEXT = 'next'
const CarouselButton =({direction, onClickButtonAction}) =>{
    const buttonPosition = direction ===  BACK ? "left-4" : "right-4"
    const buttonIcon = direction === BACK ? "<" : ">"
    return(
        <div className={`absolute top-1/2 ${buttonPosition} transform -translate-y-1/2`}>
            <button className='bg-black bg-opacity-50 rounded-full text-white p-2'
            onClick={onClickButtonAction}
            >{buttonIcon}</button>
        </div>
    )

}
export {CarouselButton, BACK,NEXT};