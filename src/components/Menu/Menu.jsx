import React from 'react';
import Dropdown from '../DropdownLang/DropdownLang';
import Search from '../SearchPanel/Search';

class Menu extends React.Component {
    render() {
        return (
            <div className="header flex-between">
                <div className="logo">
                    <img className="logo__image" src={require("../../img/logo.png")} alt="logo"/>
                </div>
                <div className="menu">
                    <ul className="menu__list flex-between">
                        <li><a href="#main">Главная</a></li>
                        <li><a href="#services">Услуги<img src={require("../../img/arrowdown.png")} alt="arrowdown"/></a></li>
                        <li><a href="#ourwirks">Наши работы</a></li>
                        <li><a href="#about">О нас</a></li>
                        <li><a href="#contacts">Контакты</a></li>
                    </ul>
                </div>
                <div className="flex">
                    <Search/>
                    <Dropdown/>
                </div>
            </div>
        )
    }
}

export default Menu;
