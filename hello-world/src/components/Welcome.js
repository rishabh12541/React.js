import React, { Component } from 'react';

// For it to be a class component it extend 'Component' class from react and it should include a 'render' method.
class Welcome extends Component {
    render() {
        const {name, role} = this.props // Destructure props like this in class components.
        // const {state1, state2} = this.state // Destructure states like this in class components if present, not present in this component, just a example.
        return (
            <div>
                <h1>Hello Rishabh working in {role} learning {name}</h1> {/*  We use this.props instead of props in class component. */}
                {this.props.children} 
            </div>
        )
    }
}

export default Welcome