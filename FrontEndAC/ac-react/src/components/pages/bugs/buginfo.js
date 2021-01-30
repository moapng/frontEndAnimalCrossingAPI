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
                data.name = Object.values(data.name)[0];
                data.months = Object.values(data.availability)[0];
                data.time = Object.values(data.availability)[2];
                data.location = Object.values(data.availability)[5];
                data.rarity = Object.values(data.availability)[6];
                this.setState({ item: data });
            });
    }
    displayMonths() {
        if (this.state.item.months == "") {
            return "All year"
        } else {
            return this.state.item.months;
        }
    }
    displayTime() {
        if (this.state.item.time == "") {
            return "All day";
        } else {
            return this.state.item.time;
        }
    }
    render() {
        return (
            <div >
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Selling price Nook / Flick</th>
                        <th>Months available</th>
                        <th>Time available</th>
                        <th>Rarity</th>
                        <th>Location</th>


                    </tr>
                    <td>{this.state.item.id}</td>
                    <td>{this.state.item.name}</td>
                    <td>{this.state.item.price} / {this.state.item['price-flick']}</td>
                    <td>{this.displayMonths()}</td>
                    <td>{this.displayTime()}</td>
                    <td>{this.state.item.rarity}</td>
                    <td>{this.state.item.location}</td>


                </table>

                <p>{this.state.item['catch-phrase']} </p>
                <img className='image' src={this.state.item['image_uri']} />
                <div id='infoText'>{this.state.item['museum-phrase']}</div>
                
            </div>
        );
    }
}

