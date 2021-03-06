import React from 'react'
import "./style.css";

function onChange() {
    console.log("changed!");
} 

function TodoItem(props) {
    return (
        <div className="todo-item">
        <input type="checkbox" 
        checked = {props.item.completed} 
        onChange = {onChange} />
        <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem
