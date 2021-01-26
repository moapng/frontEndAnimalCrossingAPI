import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class SeaPage extends Component {
    constructor(props) {
        super(props);
        this.state = { sea: {} };
    }
    componentDidMount() {
        this.fetchSea();
    }
    fetchSea() {
        fetch('https://localhost:44390/Sea')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ sea: data });
            });
    }

    handleClick(sea) {
        console.log(sea.id, sea.name['name-USen']);
        this.setState({
            seaId: sea.id,
        });
    }
    SeaCreatures = () => {
        let items = Object.values(this.state.sea).map((sea) => (
            <Link to={'seainfo/' + sea.id}>
                <li className="listItem" key={sea.id} seaId={sea.id} onClick={() => this.handleClick(sea)}>
                    <img className='icon' src={sea["icon_uri"]} />{sea.name['name-USen']}</li>
            </Link>
        ));
        return <ul className="ul">{items}</ul>;
    };
    render() {
        return (
            <div>

                <this.SeaCreatures />

            </div>
        );
    }
}