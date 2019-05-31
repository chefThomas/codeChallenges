import React, { Component } from 'react';
import Coin from './Coin';
import BarGraph from './BarGraph';
import LineGraph from './LineGraph';
import heads from '../images/heads.jpg'
import tails from '../images/tails.jpg'
import '../style/Display.css';


export default class Display extends Component {
    state = { 
        side: undefined, 
        headsCount: 0, 
        tailsCount: 0,
        countDiffArr: [],
        flipNumber: []
    };

    trackCountDiff = () => {
        this.setState({countDiffArr: [...this.state.countDiffArr, (this.state.headsCount - this.state.tailsCount)]})
    }

    incrementFlipNumber = () => {
        this.setState({ flipNumber: [...this.state.flipNumber, (this.state.headsCount + this.state.tailsCount)], countDiffArr: [...this.state.countDiffArr, this.state.headsCount - this.state.tailsCount]})
    }
    incrementHeads = () => {
        this.setState((curState) => ({ headsCount: curState.headsCount + 1 }))
    }
    
    incrementTails = () => {
        this.setState((curState) => ({ tailsCount: curState.tailsCount + 1 }))
    }

    flipCoin = () => {
        const side = Math.random() > 0.5 ? heads : tails;
        this.setState({ side })
        side === heads ? this.incrementHeads() : this.incrementTails();
        this.incrementFlipNumber()
    }

    handleClick = () => {
        this.flipCoin();
    }

    render() {
        return (
            <div>
                <h1 className="Display-title">Coin Flipper</h1>
                <div className="Display">
                    <div className='Display-coin'>
                        <Coin side={this.state.side}/>
                        <button className="Display-button" onClick={this.handleClick}><span className="Display-count-header"><span>Flips {this.state.headsCount + this.state.tailsCount}</span></span>   </button>
                    </div>
                    <div className="Display-graphs-container">
                        <BarGraph className="BarGraph" headsCount={this.state.headsCount} tailsCount={this.state.tailsCount} />
                        <LineGraph className="LineGraph" flipNumber={this.state.flipNumber} countDiff={this.state.countDiffArr} />
                    </div>
                    </div>
                </div>
        )
    }
}


