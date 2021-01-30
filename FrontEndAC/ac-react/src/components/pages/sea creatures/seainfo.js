import React, { Component } from 'react';


export default class SeaInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { item: {} };
    }
    componentDidMount() {
        fetch('https://localhost:44390/sea/' + this.props.match.params.seaId)
            .then((response) => response.json())
            .then((data) => {
                data.name = Object.values(data.name)[0];
                data.months = Object.values(data.availability)[0];
                this.setState({ item: data });
            });
    }
    render() {
        console.log(this.state);
        return (
            <div >
                <table>

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Selling price Nook</th>
                        <th>Months available</th>
                        <th>Speed</th>
                        <th>Shadow-size</th>

                    </tr>
                    <td>{this.state.item.id}</td>
                    <td>{this.state.item.name}</td>
                    <td>{this.state.item.price}</td>
                    <td>{this.state.item.months}</td>
                    <td>{this.state.item.speed}</td>
                    <td>{this.state.item.shadow}</td>

                </table>

                <p>{this.state.item['catch-phrase']} </p>
                <img className='image' src={this.state.item['image_uri']} />
                <div id='infoText'>{this.state.item['museum-phrase']}</div>
            </div>
        );
    }
}