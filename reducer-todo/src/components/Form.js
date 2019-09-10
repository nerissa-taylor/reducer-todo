import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/reducer';


const Form = () => {
    const [addNewTodo, setAddNewTodo] = useState("");
    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log(state);
    const handleChanges = event => {
        setAddNewTodo(event.target.value);
    };
    return (
        <div>
            {!state.completed ? (
                <h1>
                    {state.item}{""}
                    <i className="fas fa-plus-square" onClick={() => dispatch({ type: "ADD_TODO" })}
                    />
                </h1>
            ) : (
                    <div>
                        <input
                            className="item-input"
                            type="text"
                            name="addNewTodo"
                            value={addNewTodo}
                            onChange={handleChanges} />
                        <button
                            onClick={() => {
                                dispatch({ type: "ADD_TODO", payload: addNewTodo });
                                setAddNewTodo("")
                            }}>
                            Add todo
                         </button>
                    </div>
                )}
        </div>
    );
};
export default Form;