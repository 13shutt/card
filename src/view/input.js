import React from 'react'
import './input.css'

const Input = (props) => (
    <div className="input">
        <div className="text">{props.type}:</div> 
        <input 
            id={`${props.id}-input`}
            className="num" 
            autoFocus 
            type="text"
        /> 
    </div>
)

export default Input;