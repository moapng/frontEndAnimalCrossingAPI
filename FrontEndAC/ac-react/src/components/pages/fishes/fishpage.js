import React, { Component } from 'react';
import FishInfo from './fishinfo';

export default class FishPage extends Component {
    constructor(props) {
        super(props);
        this.state = { fish: {} };
    }
    componentDidMount() {
        this.fetchFish();
    }
    fetchFish() {

        fetch('https://localhost:44390/Fish')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ fish: data });
            });

    }
    handleClick(fish) {
        console.log(fish.id, fish['catch-phrase']);
        document.getElementById('infoDiv').style.display = 'block';
        this.setState({
            fishId: fish.id,
            name: fish.name['name-USen'],
            price: fish.price,
            availability: fish.availability['month-northern'],
            rarity: fish.availability.rarity,
            image: fish['image_uri'],
            catchphrase: fish['catch-phrase'],
            shadowSize: fish.shadow
        });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

    }
    Fishes = () => {
        let items = Object.values(this.state.fish).map((fish) => (

            <li className='listItem' key={fish.id} fishId={fish.id} onClick={() => this.handleClick(fish)}>
                <img className='icon' src={fish['icon_uri']} />{fish.name['name-USen']}</li>
        ));
        return <ul className='ul'>{items}</ul>;
    };
    render() {
        return (
            <div>
                <FishInfo fishId={this.state.fishId}
                    name={this.state.name}
                    price={this.state.price}
                    availability={this.state.availability}
                    rarity={this.state.rarity}
                    image={this.state.image}
                    catchphrase={this.state.catchphrase}
                    shadowSize={this.state.shadowSize}></FishInfo>
                <this.Fishes />

            </div>

        );
    }
}