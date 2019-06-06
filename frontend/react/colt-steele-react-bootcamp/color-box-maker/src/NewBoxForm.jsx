import React, { Component } from 'react';
import shortid from 'shortid';
import './NewBoxForm.css';

export default class NewBoxForm extends Component {

    state = {
       width: '', 
       height: '', 
       backgroundColor: 'blue',
       name: ''
    }

    // control form
    handleChange = (e) => {
        const name = e.target.name

        this.setState({ [e.target.name]: e.target.value})
    }

    // pass data up to BoxList
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState((cur) => ({...cur, name: shortid.generate()}), 
        () => this.props.addBox(this.state))
    }


    render() {
        return (
            <form style={{display: 'grid'}} onSubmit={this.handleSubmit}>
                <label htmlFor="width">Width: </label>
                <input id="width" name="width"type="text" value={this.state.width} onChange={this.handleChange}/>

                <label htmlFor="height">Height: </label>
                <input id="color" name="height"type="text" value={this.state.height} onChange={this.handleChange}/>                
                
                <label htmlFor="color-select">Color: </label>
                <select style={{marginBottom: '15px', width: '100px'}}value={this.state.backgroundColor} name="backgroundColor" id="color-select" onChange={this.handleChange}>
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                    <option value="black">black</option>
                    <option value="yellow">yellow</option>
                </select>
                <input style={{width: '150px', margin: 'auto'}} type="submit"/>
            </form>
        )
    }
}


// <label for="pet-select">Choose a pet:</label>

// <select id="pet-select">
//     <option value="">--Please choose an option--</option>
//     <option value="dog">Dog</option>
//     <option value="cat">Cat</option>
//     <option value="hamster">Hamster</option>
//     <option value="parrot">Parrot</option>
//     <option value="spider">Spider</option>
//     <option value="goldfish">Goldfish</option>
// </select>
