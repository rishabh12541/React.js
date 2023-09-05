import React from 'react'

function FunctionClick() {

    function clickHandler () {
        console.log("Button Clicked");
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button> {/* We want handler to be a function and not a function call, hence we cannot do clickHandler() this, it will not work.*/}
        </div>
    )
}

export default FunctionClick
