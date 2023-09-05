import React from 'react';

const Hello = () => {
    return (
        <div>
            <h1>Hello Rishabh.</h1>
        </div>
    ) /* This is the JSX format.*/

    // return React.createElement('div', {id: 'hello', className: 'dummyClass'}, React.createElement('h1', null, 'Hello Rishabh')) // This is without JSX, which uses React.createElement() which in turn uses React Library.
}

export default Hello