import React from 'react';
import ToDoItem from './ToDoItem';
import {useSelector} from 'react-redux';

function ToDoList() {
    let todos = useSelector(state => state)
    return(
        <div className="my-2">
            {todos.map(todo=> {
                return <ToDoItem key={todo.id} todo={todo}/>
            })}
        </div>
    )
}

export default ToDoList;