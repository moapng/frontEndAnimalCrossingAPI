import React, { Component } from 'react';
import BugInfo from './buginfo';

export default class BugPage extends Component {
    constructor(props) {
        super(props);
        this.state = { bug: {} };
    }
    componentDidMount() {
        this.fetchFish();
    }
    fetchFish() {

        fetch('https://localhost:44390/Bug')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ bug: data });
            });
    }
    handleClick(bug) {
        console.log(bug.id, bug.name['name-USen']);
        document.getElementById('infoDiv').style.display = 'block';
        this.setState({
            bugId: bug.id,
            name: bug.name['name-USen'],
            price: bug.price,
            availability: bug.availability['month-northern'],
            rarity: bug.availability.rarity,
            image: bug['image_uri'],
            catchphrase: bug['catch-phrase'],
            location: bug.availability.location
        });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

    }
    Bugs = () => {
        let items = Object.values(this.state.bug).map((bug) => (

            <li className="listItem" key={bug.id} bugId={bug.id} onClick={() => this.handleClick(bug)}>
                <img className='icon' src={bug["icon_uri"]} />{bug.name['name-USen']}</li>
        ));
        return <ul className="ul">{items}</ul>;
    };
    render() {
        return (
            <div>
                <BugInfo bugId={this.state.bugId}
                    name={this.state.name}
                    price={this.state.price}
                    availability={this.state.availability}
                    rarity={this.state.rarity}
                    image={this.state.image}
                    catchphrase={this.state.catchphrase}
                    location={this.state.location}></BugInfo>
                <this.Bugs />

            </div>
        );
    }
}