import React from 'react';
import s from './header.module.css';

const Header = () => {

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
        <div className={s.header}>
            <div>
                <h1>Now {date.getHours() % 12} o'clock!</h1>
            </div>
            <div>
            </div>
        </div>
    );
}

export default Header;