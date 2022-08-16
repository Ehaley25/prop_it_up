import React, { useState } from 'react';
    
    
const Counter = props => {
    const [state, setState] = useState({
        clickCount: props.age
    });

    const handleClick = () => {
        setState({
            clickCount: state.clickCount + 1
        });
    }
    return (
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: {state.clickCount}</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={ handleClick }>Click Me</button>
        </div>
    );
}

export default Counter;

