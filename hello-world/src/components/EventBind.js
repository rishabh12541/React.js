import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        this.clickHandler = this.clickHandler.bind(this) // Binding here like this is also good, as it will not cause the component to re-render on every change in state.
    }

    
    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    //     console.log(this) // (It will print undefined) The attribute onClick just stores a reference to that function. Whenever a user clicks on the button, that referenced function is called on the global object. So the keyword 'this' is set to undefined in the strict mode. To resolve this, you have to bind the function to 'this' in the constructor(Event binding).
    // }

    clickHandler = () => {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }// Using arrow function as the event handler is the best, as arrow function do not have the context or 'this' of its own, so it uses the context of the enclosing execution context which is EventBind class or constructor. 

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click</button> {/* Using the bind or arrow function on every change in state would cause the component to re-render and will generate new handler on every update.*/}
                <button onClick={() => this.clickHandler()}>Click</button>
                <button onClick={this.clickHandler}>Click</button>{/* We do not call the component here as we are only passing the reference here which will be called onClick.*/}
            </div>
        )
    }
}

function value () {
    console.log(this);
}

value()

export default EventBind
