import React, { Component } from 'react';
import SeaInfo from './seainfo';

export default class SeaPage extends Component {
    constructor(props) {
        super(props);
        this.state = { sea: [] };
    }
    componentDidMount() {
        this.fetchSeaCreatures();
    }
    fetchSeaCreatures() {
        fetch('https://localhost:44390/Sea')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ sea: data });
            });
    }

    handleClick(sea) {
        console.log(sea.id, sea.name['name-USen']);
        this.setState({
            seaId: sea.id,
            name: sea.name['name-USen'],
            price: sea.price,
            availability: sea.availability['month-northern'],
            rarity: sea.availability.rarity,
            image: sea['image_uri']
        });

    }
    SeaCreatures = () => {
        let items = Object.values(this.state.sea).map((sea) => (

            <li className="listItem" key={sea.id} seaId={sea.id} onClick={() => this.handleClick(sea)}>
                <img className='icon' src={sea["icon_uri"]} />{sea.name['name-USen']}</li>
        ));
        return <ul className="ul">{items}</ul>;
    };
    render() {
        return (
            <div>
                <SeaInfo seaId={this.state.seaId}
                    name={this.state.name}
                    price={this.state.price}
                    availability={this.state.availability}
                    rarity={this.state.rarity}
                    image={this.state.image}></SeaInfo>
                <this.SeaCreatures />

            </div>
        );
    }
}