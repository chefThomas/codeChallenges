import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';
import shortid from 'shortid';
import {
         topLeft,
         topRight,
         bottomLeft,
         bottomRight,
         core,
         topRow, 
         bottomRow,
         firstCol,
         lastCol
        } from './helpers';

export default class Board extends Component {

    state = {
        '1': false, '2': false, '3': false, '4': false, '5': false,
        '6': false, '7': false, '8': false, '9': false, '10': false,
        '11': false, '12': false, '13': false, '14': false, '15': false,
        '16': false, '17': false, '18': false, '19': false, '20': false,
        '21': false, '22': false, '23': false, '24': false, '25': false
    };

    componentDidUpdate() {
        const checkWin = Object.keys(this.state).every((el) => {
            return !this.state[el]
        })

        if(checkWin){
            console.log('YOU WON')
        }
    }

    cellSwitch = (index) => {

        const coreCells = ['7', '8', '9', '12','13','14','17','18','19'];
        const topRowCells = ['2','3','4'];
        const bottomRowCells = ['22','23','24'];
        const firstColCells = ['6','11','16'];
        const lastColCells = ['10','15','20'];       
        
        if (index === '1') {
            this.setState((cur) => topLeft(cur,index))
        }

        if (index === '5') {
            this.setState((cur) => topRight(cur,index))
        }
        
        if (index === '21') {
            this.setState((cur) => bottomLeft(cur, index))
        }

        if (index === '25') {
            this.setState((cur) => bottomRight(cur, index))
        }

        if (coreCells.includes(index)) {
            this.setState((cur) => core(cur, index))
        }

        if (topRowCells.includes(index)) {
            this.setState((cur) => topRow(cur, index))
        }
        
        if (bottomRowCells.includes(index)) {
            this.setState((cur) => bottomRow(cur, index))
        }

        if (firstColCells.includes(index)) {
            this.setState((cur) => firstCol(cur, index))
        }

        if (lastColCells.includes(index)) {
            this.setState((cur) => lastCol(cur, index))
        }

    }

    initGame = () => {
        // call cellSwitch 10x with randomly chosen arg 1-25
        for(let i = 0; i < 10; i++){
            let random = Math.ceil(Math.random() * 25).toString(10)
            console.log(random)
            this.cellSwitch(random)
        }
    }


    render() {
        // generate cells
        const cells = Object.keys(this.state).map((key) => {
            return <Cell dataindex={key} 
                         key={shortid.generate()}
                         handleClick={this.cellSwitch}
                         className={`Cell ${this.state[key] ? 'Cell-on' : 'Cell-off'}`} 
                    />
        })

        return (
            <div>
                <button onClick={this.initGame}>Start</button>
                <div className={`Board`}>
                    {cells}
                </div>
            </div>
        )
    }
}
