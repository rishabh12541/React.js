import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }
    
    incrememt() {
        const new_count = this.state.count + 1;
        // this.setState({
        //     count: new_count,
        // }, () => {console.log('Callback Value', this.state.count)}) // To call something after state is set , we use callback function.
        this.setState((prevState, props) => ({
            count: prevState.count + 1,
        }))
        console.log(this.state.count) // Here count will be 1 less than the original count as this.setState is a asynchronous function and console.log will be called first. 
    }

    incrementFive() {
        this.incrememt()
        this.incrememt()
        this.incrememt()
        this.incrememt()
        this.incrememt()
    } // React merges multiple setStates call into one, so to update state on previous state, we need to pass a call back function in this.setState, which will take prevState as parameters and second parameter here is props.

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => {
                    this.incrementFive(); // It depends on where exactly are you using the Arrow function. If Arrow function are used in render method, then they create a new instance everytime render is called just like how bind would work.
                    // An arrow function does not have its own 'this'; the 'this' value of the enclosing execution context is used. once when the class is instantiated. This is similar to how binding works in constructor.
                    console.log(this, "hello")}}>Increment</button> {/* It will print execution context of enclosing context 'Counter'*/}
            </div>
        )
    }
}

export default Counter
