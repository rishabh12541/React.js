import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>Greet Parent</button>
            <button onClick={() => props.greetHandler('Child')}>Greet Parent</button> {/* When we want to pass arguments to the method of the parent component, it is good to use arrow function in the event handler*/}
        </div>
    )
}

export default ChildComponent
