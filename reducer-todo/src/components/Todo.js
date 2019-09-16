import React from 'react'

export default function Todo(props) {
    const { id, toggleComplete, item, completed } = props;
    return (
        <li
            className={completed ? 'completed' : 'none'}
            // style={{textDecoration: completed ? 'line-through': 'none'}}
            onClick={() => toggleComplete(id)}
        >
            {item}
        </li>


    )
}
