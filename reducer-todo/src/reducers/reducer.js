import React from 'react';

export const initialState =
{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

export const todoReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                completed: !state.completed,
                item: action.payload,
                id: new Date()
            };
        case "TOGGLE_COMPLETED":
            return {
                ...state,
                completed: !state.completed
            };
        default: return state;
    }

}