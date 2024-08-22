import styles from'./cardDays.module.css'
import React, { useState } from 'react';

export default function CardDay(props){
    const schedules = []
    for(let time = 7; time < 19;time++){
        schedules.push(time);
    }
    const [isExpanded, setIsExpanded] = useState(false);

    const dayCLick = () => { setIsExpanded(!isExpanded); }

    const timeClick = () => {console.log('Você selecionou um horário!')}

    return (
        <div className={styles.day_container}>
            <div className={styles.day_data} onClick={dayCLick}>
                <div className={styles.day_info}>
                    <p>{ props.day.dayWord }</p>
                    <p>{ props.day.date }</p>
                </div>
            </div>

            <div className={isExpanded ? styles.day_time : styles.none}>
                {schedules.map( (time, index) => ( <p key={index} onClick={timeClick}>{time} : 00</p> ))}
            </div>
        </div>
    );
}

