import React, { Component } from 'react';

export default class BugInfo extends Component {
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
                    </tr>
                    <td>{this.props.bugId}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.price}</td>
                    <td>Months {this.props.availability}</td>
                    <td>{this.props.rarity}</td>
                    <td>{this.props.location}</td>
                </table>
                <p>{this.props.catchphrase}</p>
                <img className='image' src={this.props.image} />
            </div>
        );
    }
}

