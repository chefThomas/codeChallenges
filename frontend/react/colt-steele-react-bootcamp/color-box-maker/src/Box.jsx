import React, { Component } from 'react';
import shortid from 'shortid';

export default class Box extends Component {

    handleClick = (e) => {
        this.props.delete(this.props.name)
    }

    render() {
        shortid.generate();
        return (
            <button 
                style={this.props.style} 
                name={this.props.name} 
                key={this.props.key} 
                onClick={this.handleClick}>
            </button>
        )
    }
}
