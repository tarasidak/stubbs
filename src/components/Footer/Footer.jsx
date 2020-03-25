import React from 'react';

class Footer extends React.Component {
    render(){
        return(
            <div className="footer flex-between">
                <div className="footer__about">
                    <h4 className="footer__heading">О компании</h4>
                    <ul className="footer_lists">
                        <li><a href="#ourprojects">Наши работы</a></li>
                        <li><a href="#contacts">Контакты</a></li>
                        <li><a href="#delivery">Доставка</a></li>
                        <li><a href="#order">Форма заказа</a></li>
                    </ul>
                </div>
                <div className="footer__service">
                    <div className="vl_footer"></div>
                    <h4 className="footer__heading">Услуги</h4>
                    <div className="flex-between">
                        <ul className="footer_lists">
                            <li><a href="#ourprojects">Производство оборудования</a></li>
                            <li><a href="#contacts">Металлическая мебель</a></li>
                            <li><a href="#delivery">Металлоконструкции</a></li>
                            <li><a href="#order">Металлообработка</a></li>
                        </ul>
                        <ul className="footer_lists">
                            <li><a href="#ourprojects">Раскрой металла</a></li>
                            <li><a href="#contacts">Конструкторское бюро</a></li>
                            <li><a href="#delivery">Аренда техники</a></li>
                            <li><a href="#order">Ремонт техники</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_contact">
                    <div className="vl_footer"></div>
                    <h4 className="footer__heading">Контактная информация</h4>
                    <p>Заводская улица, 2В, Буча,<br/> Киевская область, 08292</p>
                    <p className="roboto">ПН  -  ПТ: 09:00 - 18:00</p>
                    <p className="roboto">+38(097)123-45-67</p>
                    <ul className="flex">
                        <li><a href="#facebook"><img src={require("../../img/facebook.png")} alt="facebook"/></a></li>
                        <li><a href="#insta"><img src={require("../../img/instagram.png")} alt="insta"/></a></li>
                        <li><a href="#youtube"><img src={require("../../img/youtube.png")} alt="youtube"/></a></li>
                        <li><a href="#google"><img src={require("../../img/facebook.png")} alt="google"/></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;