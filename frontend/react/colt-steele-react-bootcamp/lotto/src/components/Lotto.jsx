import React, { Component } from 'react';
import Ball from './Ball';
import '../style/Lotto.css'

export default class Lotto extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }

    state = { nums: Array.from({length: this.props.numBalls})
    };


    generateNums = () => {

        this.setState((curState) => ({
            nums: curState.nums.map((num) => {
                return Math.ceil(Math.random() * this.props.maxNum)
            })
        }))
        

    }

    handleClick = () => {
        this.generateNums();
    }

    render() {
        console.log()
        return (
            <div className="Lotto">
                <h1>{this.props.title}</h1>
                <div className="ball-container">
                    {this.state.nums.map((number)=> <Ball num={number}/>)}
                </div>
                <button className="Lotto-button" onClick={this.handleClick}>Play Lotto</button>
            </div>
        )
    }
}
