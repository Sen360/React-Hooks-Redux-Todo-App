import React from 'react';
import { addTodo } from '../redux/actions';
import {v1 as uuid} from 'uuid';
import { useState} from 'react';
import {useDispatch} from "react-redux";

function ToDoInput() {
    let [name,setName] = useState();
    let dispatch = useDispatch();
    return(
        <div>
            <div className="row mx-2">
                <input 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    className="col form-control"
                />
               <button 
               onClick = {()=> {
                   dispatch(addTodo({
                   id: uuid(),
                   name: name
               }))
               setName('');            
            }
               }
               class="btn btn-primary m-2"
               >
                Add</button>
            </div>
        </div>
    )
}

export default ToDoInput;