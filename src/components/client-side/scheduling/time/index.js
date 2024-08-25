/* eslint-disable react/prop-types */
import React from 'react';

import styles from './time.module.css'
import AccountClient from '../Account-client';

export default function DayTime({schedules, showChooseTimes, timeClick, day }) {
    return (
        <div className={styles.day_time}>
            {schedules.map((time, index) => (
                <div key={index} className= {styles.time_container}>
                    <p onClick={() => timeClick(index)}>{time} : 00</p>
                    {showChooseTimes[index] && (
                        <AccountClient date={{ day: day.date, time: time }} />
                    )}
                </div>
            ))}
        </div>
    );
}