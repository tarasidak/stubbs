import React, { Component } from 'react';
import Slider from "react-slick";

const photos = [
    {
        name: 'Photo 1',
        url: require("../../img/Photo.png")
    },
    {
        name: 'Photo 2',
        url: require("../../img/Photo.png")
    },
    {
        name: 'Photo 3',
        url: require("../../img/Photo.png")
    },
    {
        name: 'Photo 4',
        url: require("../../img/Photo.png")
    }
]

class SliderBlock extends Component {
    render(){
        const settings = {
            dots: true,
            fade: true,
            infinite:true,
            speed: 1000,
            slideToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className: "slides"
        }
        return(
            <div className="slider">
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return (
                            <div key={photo.name}>
                                <img src={photo.url} alt="background_img"/>
                            </div>
                        )
                    })}
                </Slider>
                <div className="slider-header">
                    <h1 className="slider-header__heading"><span className="slider-header_line">Высокоточное изготовление</span><br/>изделий из металла по чертежам</h1>
                </div>
            </div>
        )
    }
}

export default SliderBlock;