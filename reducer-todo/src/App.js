import React, { useReducer } from 'react';
import Form from './components/Form';
import './App.css';
import { initialState, todoReducer } from './reducers/reducer';
import TodoList from './components/TodoList';


function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const addNewTodo = item => dispatch({ type: 'ADD_NEWTODO', payload: item })
  const toggleComplete = id => dispatch({ type: 'TOGGLE_COMPLETE', id: id })
  const clearCompleted = () => dispatch({ type: 'CLEAR_COMPLETED' });
  return (
    <div className="App">

      <Form addNewTodo={addNewTodo} clearCompleted={clearCompleted} />
      <TodoList todos={state.todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
