import React, { Component } from 'react';

export default class Fish extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div onClick={() => this.props.item}>
                {this.props.item.name}
            </div>
        );
    }
}

