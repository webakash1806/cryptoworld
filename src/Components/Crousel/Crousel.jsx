
import React from 'react'


const Crousel = ({ id, name }) => {

    const responsiveCarousel = {
        0: {
            items: 2
        },
        720: {
            items: 5
        }
    }

    const item = [name]



    return (
        <>
            <AliceCarousel
                mouseTracking
                autoPlayInterval={1500}
                animationDuration={1500}
                infinite
                responsive={responsiveCarousel}
                disableDotsControls
                disableButtonsControls
                items={item}
                autoPlay
            />
        </>
    )
}

export default Crousel
