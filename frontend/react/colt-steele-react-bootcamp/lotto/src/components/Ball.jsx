import React, { Component } from 'react';
import '../style/Ball.css';

export default class Ball extends Component {
    render() {
        return (
            <div className="Ball">
                {this.props.num}
            </div>
        )
    }
}
