import React, { Component } from 'react';

export default class SeaPage extends Component {
    constructor(props) {
        super(props);
        this.state = { seaCreature: [] };
    }
    componentDidMount() {
        this.fetchSeaCreatures();
    }
    fetchSeaCreatures() {
        fetch('https://localhost:44390/Sea')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ seaCreature: data });
            });
    }

    render() {
        const SeaCreatures = () => {
            let items = Object.values(this.state.seaCreature).map((seaCreature) => (
                <li className="listItem" key={seaCreature.id}><img src={seaCreature["icon_uri"]} />{seaCreature.name["name-USen"]}</li>
            ));
            return <ul className="ul">{items}</ul>;
        };
        return (

            <div>
                <SeaCreatures />
            </div>
        );
    }
}