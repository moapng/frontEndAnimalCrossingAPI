import React, { Component } from 'react';

export default class BugInfo extends Component {
    render() {
        return (
            <div className='infoDiv'>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Selling price</th>
                        <th>Availability</th>
                        <th>Rarity</th>
                    </tr>
                    <td>{this.props.bugId}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.price}</td>
                    <td>Months {this.props.availability}</td>
                    <td>{this.props.rarity}</td>
                </table>
                <img className='image' src={this.props.image} />
            </div>
        );
    }
}

