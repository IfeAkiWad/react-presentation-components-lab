// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    constructor() {
        super()
        this.state = {
            mood: "happy"
        }
    }

    handleClick = () => {
        this.setState((previousState) => {
           return {mood: !previousState.mood}
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <button>{this.state.mood ? "happy" : "sad"}</button>
                
            </div>
        )
    }
}
