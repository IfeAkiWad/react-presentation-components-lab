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
        const toggleMood = this.state.mood == "happy" ? "sad" : "happy"
        this.setState({
            mood: toggleMood
        })
    }

    // handleToggle = () => {
    //     if (this.state.mood == "happy") {
    //         return true
    //     }
    //     else if(this.state.mood == "sad") {
    //         return false
    //     }
    // }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}

// import React, {Component} from 'react'

// class SimpleComponent extends Component {
//     state={
//         mood: "happy"
//     }

//     handleClick = () => {
//         const changeMood = this.state.mood === "happy" ? "sad" : "happy";
//         this.setState({
//             mood: changeMood
//         })

//     }

//     render(){
//         return(
//             <div onClick={this.handleClick}>
//             {this.state.mood}
//             </div> 
//         )
//     }
// }

// export default SimpleComponent;