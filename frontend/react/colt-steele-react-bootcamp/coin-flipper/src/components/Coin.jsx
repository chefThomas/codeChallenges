import React, { Component } from 'react';
import '../style/Coin.css';
import heads from '../images/heads.jpg'

export default class Coin extends Component {

    static defaultProps = {
        side: heads
    }

    render() {
        return (
                <img className="Coin" src={ this.props.side } alt="coin"/>
        )
    }
}
