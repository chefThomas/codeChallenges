import React, { Component } from 'react'
import '../styles/RollButton.css'


export default class RollButton extends Component {
    render() {
        return (
            <button onClick={this.props.click} id="roll-button" disabled={this.props.disabled}>{this.props.text} </button>
        )
    }
}
