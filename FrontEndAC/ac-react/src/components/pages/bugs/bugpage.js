import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class BugPage extends Component {
    constructor(props) {
        super(props);
        this.state = { bug: {} };
    }
    componentDidMount() {
        this.fetchBug();
    }
    fetchBug() {
        fetch('https://localhost:44390/Bug')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ bug: data });
            });
    }
    handleClick(bug) {
        console.log(bug.id, bug.name['name-USen']);
        this.setState({
            bugId: bug.id
        });
    }
    Bugs = () => {
        let items = Object.values(this.state.bug).map((bug) => (
            <Link to={'buginfo/' + bug.id}>
                <li className="listItem" key={bug.id} bugId={bug.id} onClick={() => this.handleClick(bug)}>
                    <img className='icon' src={bug["icon_uri"]} />{bug.name['name-USen']}</li>
            </Link>
        ));
        return <ul className="ul">{items}</ul>;
    };
    render() {
        return (
            <div>

                <this.Bugs />

            </div>
        );
    }
}