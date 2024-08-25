/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from './cardDays.module.css';


export default function CardDay(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const dayClick = () => {
        const newExpandState = !isExpanded;
        setIsExpanded(newExpandState);
        props.onExpand(newExpandState, props.day);

    }
 
    return (
        <div className={styles.day_container} onClick={dayClick}>
            <div className={styles.day_info}>
                <p>{props.day.date}</p>
                <p className={styles.day_Word}>{props.day.dayWord}</p>
            </div>
        </div>
    );
}