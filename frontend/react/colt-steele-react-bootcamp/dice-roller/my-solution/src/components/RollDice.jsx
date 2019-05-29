import React, { Component } from 'react';
import Die from './Die';
import RollButton from './RollButton'

import '../styles/RollDice.css'



export default class RollDice extends Component {
    state = { dieOne: 1, dieTwo: 1, buttonText: 'Roll', buttonDisable: false, animate: false };

    resetButton = () => {
        setTimeout(() => {
            this.setState({buttonText: 'Roll', buttonDisable: false, animate: false })
        }, 1000)
    }

    randomNum = () => Math.ceil(Math.random() * 6);

    handleClick = (e) => {
        e.preventDefault();
        this.setState({ buttonText: 'Rolling...', buttonDisable: true, animate: true  });

        setTimeout(() => {
            this.setState({ dieOne: this.randomNum(), dieTwo: this.randomNum() })
        }, 1000)
        
        this.resetButton();
        // animate 
        // change dice state
        // disable button and change color/inner text
    }

    render() {
        return (
            <div style={{position: 'relative'}} className='container'>
                <div className="dice-container">
                    <Die value={this.state.dieOne} animate={this.state.animate} />
                    <Die value={this.state.dieTwo} animate={this.state.animate} />
                </div>
                <div className="button-container">
                    <RollButton click={this.handleClick} text={this.state.buttonText} disabled={this.state.buttonDisable} />
                </div>
            </div>
        )
    }
}
