import React from 'react';
import  { ScrollRotate } from 'react-scroll-rotate';

const photos = [
    {
        name: 'photo1',
        url: require("../../img/first.png"),
        heading: 'Производство оборудования'
    },
    {
        name: 'photo2',
        url: require("../../img/second.png"),
        heading: 'Металлическая мебель'

    },
    {
        name: 'photo3',
        url: require("../../img/third.png"),
        heading: 'Металлоконструкции'
    },
    {
        name: 'photo4',
        url: require("../../img/fourth.png"),
        heading: 'Металлообработка'
    },
    {
        name: 'photo5',
        url: require("../../img/fifth.png"),
        heading: 'Раскрой металла'
    },
    {
        name: 'photo6',
        url: require("../../img/sixth.png"),
        heading: 'Конструкторское бюро'
    }
];

const photosSec = [
    {
        name: 'photo7',
        url: require("../../img/seventh.png"),
        heading: 'Аренда техники'
    },
    {
        name: 'photo8',
        url: require("../../img/last.png"),
        heading: 'Ремонт техники'
    }
];


class Service extends React.Component {
    render(){
        return(
            <div className="service">
                <div className="service__animation">
                    <div className="big__first absolute">  
                        <ScrollRotate>
                            <img src={require("../../img/big.png")} alt="bigImg" />
                        </ScrollRotate>
                    </div>
                    <div className="small__first absolute">  
                        <ScrollRotate>
                            <img  src={require("../../img/small.png")} alt="smallImg"/>
                        </ScrollRotate>
                    </div>
                    <div className="small__second absolute">
                        <ScrollRotate>
                            <img src={require("../../img/small2.png")} alt="smallImg"/>
                        </ScrollRotate>
                    </div>
                    <div className="big__second absolute">
                        <ScrollRotate>
                            <img src={require("../../img/big2.png")} alt="bigImg"/>
                        </ScrollRotate>
                    </div>
                </div>

                <h2 className="service__header block_header">Услуги</h2>
                <div className="service-first">
                    {photos.map((photo) => {
                        return (
                            <div>
                                <div className="service-img" key={photo.name}>
                                    <img src={photo.url} alt="background_img"/>
                                    <div className="service-heading">
                                        <h3>{photo.heading}</h3>
                                        <div className="vl"></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                <div className="service-second">
                    {photosSec.map((photo) => {
                        return (
                            <div>
                                <div className="service-img-sec" key={photo.name}>
                                    <img src={photo.url} alt="background_img"/>
                                    <div className="service-heading">
                                        <h3>{photo.heading}</h3>
                                        <div className="vl"></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className="service__button"> Быстрый расчет цены по чертежу</button>
                <button className="service__button_mobile">Расчет стоимости</button>
            </div>
            
        )
    }
}

export default Service;
