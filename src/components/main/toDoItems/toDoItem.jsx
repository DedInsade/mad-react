import React from 'react';
import ze from './toDoItem.module.css'

const ToDoItem = (props) => {
    return (
        <div className={ze.item}>
            <input id={"check" + props.id} type="checkbox" />
            <label htmlFor={"check" + props.id}> {props.task} </label>
        </div>
    );
}

export default ToDoItem;