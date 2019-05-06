import React from 'react'
import './dropdown.css'

const Dropdown = (props) => (
    <div className="dropdown-content" id={`${props.id}-drop`}>
        <li onClick={props.copy}>Копировать</li>
        <li onClick={props.edit}>Редактировать</li>
        <li onClick={props.remove}>Удалить</li>
    </div>
)

 
export default Dropdown;