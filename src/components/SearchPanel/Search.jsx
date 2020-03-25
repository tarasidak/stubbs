import React from 'react';

class Search extends React.Component {
    constructor(){
        super();

        this.state = {
            displayMenu: false,
            icon: require("../../img/search.png")
        };

        this.showSearch = this.showSearch.bind(this);
        this.hideSearch = this.hideSearch.bind(this);
    };

    showSearch(event) {
        event.preventDefault();
        this.setState({ displayMenu: true, 
                        icon: false}, () => {
            document.addEventListener('click', this.hideSearch);
        });
    }

    hideSearch() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideSearch);
        });
    }

    render() {
        return (
            <div className="search">
                <div className="button" onClick={this.showSearch}> 
                    <img src={require("../../img/search.png")} alt="search"/> 
                </div>
                { this.state.displayMenu ? (
                <ul className="search__list">
                    <li><input type="search" name="search"/></li>
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

export default Search;