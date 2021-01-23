import React, { Component } from 'react';
import FishInfo from './fishinfo'

export default class FishInfoTest extends Component {
    constructor(props) {
        super(props);
        this.state = { items: {} };
    }
    componentDidMount() {
        fetch('https://localhost:44390/Fish/' + this.props.match.params.fishId)
            .then((response) => response.json())
            .then((data) => {

                console.log(data);
                this.setState({ items: data });
            });
    }
    render() {
        console.log(this.state);
        const { items } = this.state;
        return (
            <div>
                {Object.values(items).map((items) => (
                    <FishInfo
                        key={items.id}
                        fishId={items.id}
                        name={items.name}
                        price={items.price}
                        availability={items.availability}
                        rarity={items.rarity}
                        image={items.image} />
                ))}
            </div>
        );
    }
}

