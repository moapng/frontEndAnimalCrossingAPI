import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
        console.log(fish.id);
        this.setState({
            fishId: fish.id
        });

    }
    Fishes = () => {
        let items = Object.values(this.state.fish).map((fish) => (
            <Link to={'fishinfo/' + fish.id}>
                <li className='listItem' key={fish.id} fishId={fish.id} onClick={() => this.handleClick(fish)}>
                    <img className='icon' src={fish['icon_uri']} />{fish.name['name-USen']}</li>
            </Link>
        ));
        return <ul className='ul'>{items}</ul>;
    };
    render() {
        return (
            <div>

                <this.Fishes />

            </div>

        );
    }
}