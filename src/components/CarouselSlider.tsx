import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselSlider = () => {
    const imagesCarousel = [
        {
            id: 1,
            image: './assets/images/jujutsu-kaisen-0.jpeg',
            label: 'Jujutsu Kaisen 0 - The Movie'
        },
          {
             id: 2,
             image: './assets/images/original.jpeg',
             label: ''
         },
         {
             id: 3,
             image: './assets/images/SPY-x-FAMILY-2_Portada.jpeg',
             label: 'SPY x FAMILY'
         } 
    ]

    return (
    /*     <>
            {imagesCarousel.length > 2 ? ( */
                <Carousel>
                    {imagesCarousel.map((item, index) => (
                        <Carousel.Item key={index}>
                            <img className='d-block w-100' src={item.image} alt={item.label} />
                            <Carousel.Caption>
                                <h3>{item.label}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
           /*  ) : (<img src={imagesCarousel[0].image} alt= {imagesCarousel[0].label}/>)}
        </> */
    )
}

export default CarouselSlider;
