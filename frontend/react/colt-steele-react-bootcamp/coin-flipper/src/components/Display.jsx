import React, { Component } from 'react';
import Coin from './Coin';
import heads from '../images/heads.jpg'
import tails from '../images/tails.jpg'
import '../style/Display.css';


export default class Display extends Component {
    state = { side: undefined, headsCount: 0, tailsCount: 0 }

    incrementHeads = () => {
        this.setState((curState) => ({ headsCount: curState.headsCount + 1 }))
    }
    
    incrementTails = () => {
        this.setState((curState) => ({ tailsCount: curState.tailsCount + 1 }))
    }

    flipCoin = () => {
        const side = Math.random() > 0.5 ? heads : tails;
        this.setState({ side })

        side === heads ? this.incrementHeads() : this.incrementTails()

    }

    handleClick = () => {
        this.flipCoin();
    }


    render() {
        return (
            <div className="Display">
                <h1 clasName="Display-title">Coin Flipper</h1>
                <div className='Display-coin'>
                    <Coin side={this.state.side}/>
                </div>
                <button className="Display-button" onClick={this.handleClick}>Flip</button>
                <p className="Display-count">{`Out of ${this.state.headsCount + this.state.tailsCount} flips, ${this.state.headsCount} are heads and ${this.state.tailsCount} are tails`}</p>
            </div>
        )
    }
}
