import React from 'react';

class Dropdown extends React.Component {
constructor(){
    super();

    this.state = {
        displayMenu: false,
        icon: require("../../img/arrowdown.png")
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true, 
        icon: require("../../img/arrowup.png")}, () => {
        document.addEventListener('click', this.hideDropdownMenu);
    });
}

hideDropdownMenu() {
    this.setState({ displayMenu: false,
                    icon: require("../../img/arrowdown.png")}, () => {
        document.removeEventListener('click', this.hideDropdownMenu);
    });
}

  render() {
    return (
        <div  className="dropdown"  >
            <div className="button" onClick={this.showDropdownMenu}> 
                <img src={require("../../img/Flag_of_Russia.png")} alt="flagRussia"/> 
                <img src={this.state.icon} alt="arrowdown"/> 
            </div>
            { this.state.displayMenu ? (
            <ul className="dropdown__list">
                <li><a href="#ukrLang"><img  src={require("../../img/Flag_of_Ukraine.png")} alt="flagUkraine"/></a></li>
                <li><a href="#ukLang"><img  src={require("../../img/Flag_of_the_UK.png")} alt="flagUK"/></a></li>
            </ul>
            ):
            (
            null
            )
            }
       </div>

    );
  }
}

export default Dropdown;