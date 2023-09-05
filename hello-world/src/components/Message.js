import React, { Component } from 'react';

class Message extends Component {

    constructor() {
        super() // We extends React class Component and a call has to be made to the base class.
        this.state = {
            message: 'Welcome Rishabh'
        } // 'state' is a reserved keyword in react. 
    }

    changeMessage() {
        this.setState({
            message: 'Thanks for subscribing'
        }) // 'setState' method is used to set the State in the class component.
    }

    render() {
        return (
            <div>
                <h1>Welcome Visitor {this.state.message}.</h1>
                <button onClick={() => this.changeMessage()}>Subscribe.</button> {/* When 'onClick' we need to define a handler, changeMessage is a handler here. */}
            </div>
        )
    }
}

export default Message