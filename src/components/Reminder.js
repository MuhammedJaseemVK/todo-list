import React from 'react'
import './Reminder.css'

function Reminder() {
    return (
        <div className='container'>
            <h1>Todo list</h1>
            <div className='input-container'>
                <input type="text" />
                <button>Add todo</button>
            </div>
        </div>
    )
}

export default Reminder