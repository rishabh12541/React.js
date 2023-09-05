import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(child) {
        alert(`Hello ${this.state.parentName} from ${child}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/> {/* We do not call the component here as we are only passing the reference here which will be called onClick.*/}
            </div>
        )
    }
}

export default ParentComponent
