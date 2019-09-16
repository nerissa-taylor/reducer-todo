import React, { useState, useReducer } from 'react';



const Form = (props) => {
    const [addNewTodo, setaddNewTodo] = useState("");

    // console.log(state);



    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNewTodo(addNewTodo);
        setaddNewTodo('');
    };

    const handleClear = (e) => {
        e.preventDefault();
        props.clearCompleted();
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='todo' value={addNewTodo} onChange={(e) => setaddNewTodo(e.target.value)} />
                <button type="submit"><i className="fas fa-plus-square" />Add Todo</button>
                <button onClick={handleClear}>Clear Completed</button>
            </form>
        </div>
    );
}





export default Form;