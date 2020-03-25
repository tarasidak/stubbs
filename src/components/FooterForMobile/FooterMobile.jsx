import React from 'react';

class FooterMobile extends React.Component {
    render(){
        return(
            <div className="footer_mobile">
                <div className="flex-between">
                    <div className="footer__about_mobile">
                        <h4 className="footer__heading_mobile">О компании</h4>
                        <ul className="footer_lists_mobile">
                            <li><a href="#ourprojects">Наши работы</a></li>
                            <li><a href="#contacts">Контакты</a></li>
                            <li><a href="#delivery">Доставка</a></li>
                            <li><a href="#order">Форма заказа</a></li>
                        </ul>
                        <div className="vl_footer_mobile"></div>
                    </div>
                    <div className="footer__service_mobile">
                        <h4 className="footer__heading_mobile">Услуги</h4>
                        <ul className="footer_lists_mobile_sec">
                            <li><a href="#ourprojects">Производство оборудования</a></li>
                            <li><a href="#obj">Арт-объекты</a></li>
                            <li><a href="#delivery">Металлическая мебель</a></li>
                            <li><a href="#order">Металлообработка</a></li>
                            <li><a href="#ourprojects">Лазерная резка</a></li>
                            <li><a href="#contacts">Металлоконструкции</a></li>
                            <li><a href="#delivery">Аренда спецтехники</a></li>
                        </ul>
                        <div className="vl_footer_mobile_sec"></div>
                    </div>
                </div>
                <div className="footer_contact_mobile">
                    <h4 className="footer__heading_mobile-sec">Контактная информация</h4>
                    <p>Заводская улица, 2В,<br/> Буча,<br/> Киевская область, 08292</p>
                    <p className="roboto">ПН - ПТ 09:00 - 18:00</p>
                    <p className="roboto">+38(097)123-45-67</p>
                    <ul className="flex">
                        <li><a href="#facebook"><img src={require("../../img/facebook.png")} alt="facebook"/></a></li>
                        <li><a href="#insta"><img src={require("../../img/instagram.png")} alt="insta"/></a></li>
                        <li><a href="#youtube"><img src={require("../../img/youtube.png")} alt="youtube"/></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default FooterMobile;