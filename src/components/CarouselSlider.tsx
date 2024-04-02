import { proxy } from 'jquery';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const CarouselSlider = () => {
    const imagesCarousel = [
        {
            id: 1,
            image: './assets/images/jujutsu-kaisen-0.jpeg',
            label: 'Jujutsu Kaisen 0 - The Movie',
            logo: './assets/images/jujutsu-kaise-logo.png',
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
        <Contenitore>
            <Carousel>
                {imagesCarousel.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img className='d-block w-100' src={item.image} alt={item.label} />
                        <Carousel.Caption>
                            {item.logo && (
                                <img src={item.logo} />
                            )}

                            {!item.logo && (
                                <h3>{item.label}</h3>
                            )}

                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Contenitore>
    )
}

const Contenitore = styled.div`
img {
    width: 200px;
}
`

export default CarouselSlider;
