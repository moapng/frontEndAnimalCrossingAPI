import React, { Component } from 'react';

export default class BugPage extends Component {
    constructor(props) {
        super(props);
        this.state = { bug: {}, id: undefined };
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

    render() {
        const Bugs = () => {
            let items = Object.values(this.state.bug).map((bug) => (
                <li className="listItem" key={bug.id}><img src={bug["icon_uri"]} />{bug.name["name-USen"]}</li>
            ));
            return <ul className="ul">{items}</ul>;
        };
        return (

            <>

                <div>
                    <Bugs />
                </div>


            </>
        );
    }
}