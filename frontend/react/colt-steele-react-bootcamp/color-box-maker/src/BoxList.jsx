import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import shortid from 'shortid';

export default class BoxList extends Component {

    state = {
        boxes: [
        ]
    };

    // deleteBox = ()

    addBox = (box) => {
        this.setState(cur => ({ boxes: [...cur.boxes, box]}))
    }

    deleteBox = (name) => {
        console.log(name)
        this.setState(cur => ({boxes: cur.boxes.filter((box) => box.name !== name)}))
    }

    renderList = () => {
        return this.state.boxes.map(box => {
            const { height, width, backgroundColor: color, name } = box;
            return (
                <Box 
                    delete={this.deleteBox} 
                    style={{width: width+'px', height: height+'px', backgroundColor: color, marginRight: '5px'}} 
                    key={shortid.generate()}
                    name={name} 
                />)
            }
        )
    }

    render() {
        return (
            <div>
                {this.renderList()}
                <NewBoxForm addBox={this.addBox} />
            </div>
        )
    }
}
