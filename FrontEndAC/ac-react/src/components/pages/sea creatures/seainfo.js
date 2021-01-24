import React, { Component } from 'react';

export default class SeaInfo extends Component {
    render() {
        return (
            <div id='infoDiv'>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Selling price</th>
                        <th>Availability</th>
                        <th>Shadow-size</th>
                        <th>Speed</th>
                    </tr>
                    <td>{this.props.seaId}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.price}</td>
                    <td>Months {this.props.availability}</td>
                    <td>{this.props.shadowSize}</td>
                    <td>{this.props.speed}</td>
                </table>
                <p>{this.props.catchphrase}</p>
                <img className='image' src={this.props.image} />
            </div>

        );
    }
}