import React from 'react';
import z from './main.module.css';
import ToDoItem from './toDoItems/toDoItem';

const Main = () => {

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours <= 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
        <div>
            <div className={z.main}>
                <h3> Good {timeOfDay}! </h3>
            </div>
            <div className={z.toDoList}>
                <ToDoItem task="Do Something" id="1"/>
                <ToDoItem task="Do Something else" id="2"/>
                <ToDoItem task="Drink water" id="3"/>
                <ToDoItem task="Go sleeping" id="4"/>
            </div>
        </div>
    );
}

export default Main;