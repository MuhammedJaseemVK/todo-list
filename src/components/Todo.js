import React, { useState } from 'react'
import './Todo.css'

function Todo() {

    const [todos, settodos] = useState([]);
    const [newTodo, setnewTodo] = useState('');

    const handleInputChange = (event) => {
        setnewTodo(event.target.value);
    }

    const handleTodo = () => {
        if (newTodo.trim()) {
            settodos([...todos, newTodo]);
            setnewTodo('');
        }
    }

    const handleDeleteTodo =(index) =>{
        settodos(todos.filter((item,itemIndex)=> itemIndex != index ));
    }

    return (
        <div className='container'>
            <h1>Todo list</h1>
            <div className='input-container'>
                <input type="text" value={newTodo} placeholder='Enter a todo' onChange={handleInputChange} />
                <button className='add-btn' onClick={handleTodo}>Add todo</button>
            </div>
            <ul className='todo-list'>
                {
                    todos.map((todo,index)=>
                    <li key={index}>
                        {todo}
                        <button className='delete-btn' onClick={()=>handleDeleteTodo(index)}>Delete</button>
                    </li>
                    )
                }
                
            </ul>
        </div>
    )
}

export default Todo