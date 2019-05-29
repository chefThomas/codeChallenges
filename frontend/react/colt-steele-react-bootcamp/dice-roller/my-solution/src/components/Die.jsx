import React, { Component } from 'react';
import '../styles/Die.css'

export default class Die extends Component {
    dieValue = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six'
    }
    render() {
        return (
            <div className={this.props.animate ? 'shake' : ''}>
                <i className={`fas fa-dice-${this.dieValue[this.props.value]}`}></i>
            </div>
        )
    }
}
