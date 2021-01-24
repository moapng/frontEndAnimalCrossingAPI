import React, { Component } from 'react';

export default class FishInfo extends Component {
    render() {
        return (
            <div id='infoDiv'>
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
                    <td>{this.props.fishId}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.price}</td>
                    <td>Months {this.props.availability}</td>
                    <td>{this.props.rarity}</td>
                    <td>{this.props.location}</td>
                    <td>{this.props.shadowSize}</td>

                </table>
                <p>{this.props.catchphrase}</p>
                <img className='image' src={this.props.image} />

            </div>

        );
    }
}

