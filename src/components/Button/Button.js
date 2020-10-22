import React from 'react';
import "./Button.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    console.log(props)
    let classlist = '';

    let types = ['primary', 'danger', 'success','warning']

    if(types.includes(props.type)){
        classlist+= ` button-${props.type}`
    }
    console.log(props.large);
    if(props.large){
        classlist+= ` button-large`
    }
    if(props.outline){
        classlist += ` button-${props.type}-outline`   
    }
    return (
        <button className={classlist}>
            {props.label}
        </button>
    )
}

export default Button; 