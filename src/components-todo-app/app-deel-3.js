import React from 'react';
import TodoItem from "./TodoItem";
import Header from "./Header";
import todoData from "./TodoData";
import "./style.css";
function App() {

    const todoItems = todoData.map(item => <TodoItem key={item.id} item={item}/>)
    return (
    <div className="todo-list">
        <Header />
        {todoItems}
        
    </div>
    )
}


export default App

