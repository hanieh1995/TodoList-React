/* eslint-disable react/prop-types */
import './Todo.css';
import { ACTIONS } from './App';

function Todo({ todo, dispatch }) {

    return (
        <div className='container'>
            <span style={{ textDecoration: todo.complete ? 'line-through' : '' }} >{todo.name}</span>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>Done</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
        </div>
    )
}

export default Todo