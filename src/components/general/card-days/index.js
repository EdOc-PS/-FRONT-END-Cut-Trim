import styles from'./cardDays.module.css'
import ChooseTime from '../../client-side/scheduling/choose-time';
import React, { useState } from 'react';

export default function CardDay(props){
    const schedules = []
    for(let time = 7; time < 19;time++){
        schedules.push(time);
    }
    const [showChooseTimes, setChooseTimes] = useState(Array(schedules.length).fill(false));
    const [isExpanded, setIsExpanded] = useState(false);

    const dayCLick = () => { setIsExpanded(!isExpanded); }

    const timeClick = (index) => { 
        const updatedShowChooseTimes = [...showChooseTimes];
        for(let chooseTime = 0; chooseTime < showChooseTimes.length;chooseTime++){
            if(chooseTime != index){
                updatedShowChooseTimes[chooseTime] = false;    
            }
        }

        updatedShowChooseTimes[index] = !updatedShowChooseTimes[index];
        setChooseTimes(updatedShowChooseTimes);
    }

    return (
        <div className={styles.day_container}>
            <div className={styles.day_data} onClick={dayCLick}>
                <div className={styles.day_info}>
                    <p>{ props.day.dayWord }</p>
                    <p>{ props.day.date }</p>
                </div>
            </div>

            <div className={isExpanded ? styles.day_time : styles.none}>
                {schedules.map( (time, index) => ( 
                    <div key={index}>
                        <p onClick={() => timeClick(index)}>{time} : 00</p> 
                        {showChooseTimes[index] && (
                            <ChooseTime date={{ day: props.day.date, time : time}} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

