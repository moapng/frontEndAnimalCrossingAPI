import React, { Component } from 'react';

export default class FavouritesPage extends Component {
    constructor(props) {
        super(props);
        this.state = { favourites: [] };
    }
    componentDidMount() {
        this.fetchFavourites();
    }
    fetchFavourites() {

        fetch('https://localhost:44390/favourites')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ favourites: data });
            });
    }
    Favourites = () => {
        let items = Object.values(this.state.favourites).map((favourites) => (

            <li className='listItem' key={this.state.favourites.id}>{favourites.name}</li>
        ));

        return (
            <ul>{items}</ul>
        );
    };
    render() {
        return (
            <div>
                <this.Favourites />
            </div>
        );
    }
}
