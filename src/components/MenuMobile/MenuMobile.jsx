import React from 'react';
import Search from '../SearchPanel/Search';

class MenuMobile extends React.Component {
    constructor(props){
        super(props);
        this.wrapperRef = React.createRef();
    }
    handleClick() {
        const wrapper = this.wrapperRef.current;
        wrapper.classList.toggle('is-nav-open')
    }
    render() {
        return (
            <div className="wrapper">
                <div className="logo">
                    <img className="logo__image" src={require("../../img/logo.png")} alt="logo"/>
                </div>
                <Search/>
                <div className="nav">
                    <div className="nav__icon" type="menu-fold"
                        onClick={() => this.handleClick()}>
                            <div></div>
                            <div></div>
                            <div></div>
                    </div>
                    <div ref={this.wrapperRef} className="mobile">
                        <ul className="menu__list_mobile">
                            <li><a href="#menu" className="menu_small">Меню</a>
                                <a href="#rusLang"><img src={require("../../img/Flag_of_Russia.png")} alt="flagRussia"/></a>
                                <a href="#ukrLang" className="ukr_lang"><img  src={require("../../img/Flag_of_Ukraine.png")} alt="flagUkraine"/></a>
                                <a href="#ukLang"><img  src={require("../../img/Flag_of_the_UK.png")} alt="flagUK"/></a>
                            </li>
                            <li><a href="#service" className="service_small">Услуги</a>
                                <a href="#service"><img src={require("../../img/arrowright.png")} alt="arrowRight"/></a>
                            </li>
                            <li><a href="#ourworks">Наши работы</a></li>
                            <li><a href="#aboutus">О нас</a></li>
                            <li><a href="#contacts">Контакты</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuMobile;