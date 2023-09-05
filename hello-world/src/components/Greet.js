// 'props' short for properties is the optional input your component can accept.
// 'props' is just an object which contains the attributes and the values which have been passed from the parent component.
// 'props' are immutable and there values cannot be changed, it is a read-only property.
// 'state' is managed inside the component and can be changed. 
// Both 'props' and 'state' contains information which are used to influence UI in the bowser.
import React from 'react';

// const Greet = ({name, role}) => { // We can destructure props like this in functional component.
//     const {name, role} = props // We can also destructure like this, if props is recieved in parameters.
//     return ( 
//         <div>
//             <h1>Hello Rishabh working in {role} learning {name}</h1>
//         </div>
//     )
// }

const Greet = (props) => {
    console.log(props)
    return ( // JSX should contain only one wrapper element, that is why we used <div>.
        <div>
            <h1>Hello Rishabh working in {props.role} learning {props.name}</h1> {/* If we directly write props.name it will be treated as a text, instead if we want to use name , we need to ask react to evaluate JSX expression using {}. */}
            {props.children} {/* 'children' is the property which refers to the inner HTML between the component tags.*/}
        </div>
    )
}

export default Greet // If we export component here, we can import this with any name, but if we write export in front of const Greet(), it is a named export , we can only import with the same name.