import React, { Component } from 'react';

export default class BugInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { item: {} };
    }
    componentDidMount() {
        fetch('https://localhost:44390/Bug/' + this.props.match.params.bugId)
            .then((response) => response.json())
            .then((data) => {

                console.log(data);
                this.setState({ item: data });
            });
    }
    saveBugToFavourites() {
        fetch('https://localhost:44390/favourites',
            {
                method: 'POST',
                body: JSON.stringify({
                    bugId: this.state.item.id,
                    name: this.state.item['file-name'],
                    price: this.state.item.price
                }),
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            });
    }
    render() {
        return (
            <div >
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Selling price</th>
                        <th>Availability</th>
                        <th>Rarity</th>
                        <th>Location</th>
                        <th>Shadow-size</th>

                    </tr>
                    <td>{this.state.item.id}</td>
                    <td>{this.state.item['file-name']} PLACEDHOLDER </td>
                    <td>{this.state.item.price}</td>
                    <td>Months placeholder</td>
                    <td>rarity placeholder</td>
                    <td>location placeholder</td>
                    <td>{this.state.item.shadow}</td>

                </table>

                <p>{this.state.item['catch-phrase']} </p>
                <img className='image' src={this.state.item['image_uri']} />
                <button onClick={this.saveBugToFavourites()}>add to favourites</button>
            </div>
        );
    }
}

