import React from 'react';

export const initialState = {

    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },

        {
            item: 'Learn about react',
            completed: true,
            id: 3892987581
        },

        {
            item: "Learn about sass",
            completed: false,
            id: 3292987584
        },
        {
            item: "Learn about life",
            completed: false,
            id: 3892987580
        },
        {
            item: "Learn about SQL",
            completed: false,
            id: 3898987589
        }
    ]
};

export function todoReducer(state, action) {

    switch (action.type) {
        case "ADD_NEWTODO":
            return {
                ...state,
                todos: [...state.todos, { item: action.payload, id: Date.now(), completed: false }],

            };
        case "TOGGLE_COMPLETE":
            return {
                ...state,
                todos: state.todos.map((todo) => (todo.id == action.id ? { ...todo, completed: !todo.completed } : todo)),
            };
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos: state.todos.filter((todo) => !todo.completed),


            };
        default: return state;
    }

}