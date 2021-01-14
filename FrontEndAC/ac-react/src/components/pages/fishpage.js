import React, { Component } from 'react';

export default class FishPage extends Component {
    constructor(props) {
        super(props);
        this.state = { fish: {}, id: undefined };
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

    render() {
        const Fishes = () => {
            let items = Object.values(this.state.fish).map((fish) => (
                <li className="listItem" key={fish.id}><img src={fish["icon_uri"]} />{fish.name["name-USen"]} </li>
            ));
            return <ul className="ul">{items}</ul>;
        };
        return (
            <div>
                <Fishes />
            </div>

        );
    }
}