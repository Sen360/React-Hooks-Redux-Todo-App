import React from 'react';
import {useDispatch} from "react-redux";
import { deleteTodo, updateTodo } from '../redux/actions';
import { useState} from 'react';


function ToDoItem({todo}) {
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState(todo.name);
    let dispatch = useDispatch();
    return(
        <div>
            <div className="row mx- align-items-center">
                <div>{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
                <div className="col">
                  {editable ? <input type="text" className="form-control" 
                  
                  value={name}
                  onChange= {
                      (e) => setName(e.target.value)
                  }

                  /> : <h4>{todo.name}</h4>}
             </div>
                <button class="btn btn-danger m-2"
                    onClick={()=> {
                        console.log("update");
                        dispatch(updateTodo(
                            {
                                ...todo,
                                name: name
                            }
                        ))
                        if(editable) {
                            setName(todo.name);
                        }
                        setEditable(!editable);
                    }}
                >{editable ? "Update" : "Edit"}</button>
                <button
                onClick={()=>dispatch(deleteTodo(todo.id))}
                class="btn btn-primary m-2">
                Delete</button>
            </div>
        </div> 
    )
}

export default ToDoItem;