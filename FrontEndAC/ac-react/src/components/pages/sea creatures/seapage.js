import React, { Component } from 'react';
import SeaInfo from './seainfo';

export default class SeaPage extends Component {
    constructor(props) {
        super(props);
        this.state = { sea: [] };
    }
    componentDidMount() {
        this.fetchSeaCreatures();
    }
    fetchSeaCreatures() {
        fetch('https://localhost:44390/Sea')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ sea: data });
            });
    }

    handleClick(sea) {
        console.log(sea.id, sea.name['name-USen']);
        document.getElementById('infoDiv').style.display = 'block';
        this.setState({
            seaId: sea.id,
            name: sea.name['name-USen'],
            price: sea.price,
            availability: sea.availability['month-northern'],
            image: sea['image_uri'],
            shadowSize: sea.shadow,
            speed: sea.speed
        });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    SeaCreatures = () => {
        let items = Object.values(this.state.sea).map((sea) => (

            <li className="listItem" key={sea.id} seaId={sea.id} onClick={() => this.handleClick(sea)}>
                <img className='icon' src={sea["icon_uri"]} />{sea.name['name-USen']}</li>
        ));
        return <ul className="ul">{items}</ul>;
    };
    render() {
        return (
            <div>
                <SeaInfo seaId={this.state.seaId}
                    name={this.state.name}
                    price={this.state.price}
                    availability={this.state.availability}
                    image={this.state.image}
                    shadowSize={this.state.shadowSize}
                    speed={this.state.speed}></SeaInfo>
                <this.SeaCreatures />

            </div>
        );
    }
}