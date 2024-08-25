/* eslint-disable react/react-in-jsx-scope */
import CardDay from '../../../general/card-days';
import DayTime from '../time';
import styles from './date.module.css'
import React, { useState } from 'react';

export default function Days() {

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const calendarData = createCalendar();
  const actualDate = new Date();

  const handleExpand = (expand, day) => {
    setIsExpanded(expand);
    setSelectedDay(day);
  }

  const schedules = [];
  for (let time = 7; time < 19; time++) {
      schedules.push(time);
  }

  const [showChooseTimes, setChooseTimes] = useState(Array(schedules.length).fill(false));

  const timeClick = (index) => {
    const updatedShowChooseTimes = [...showChooseTimes];
    for (let chooseTime = 0; chooseTime < showChooseTimes.length; chooseTime++) {
      if (chooseTime !== index) {
        updatedShowChooseTimes[chooseTime] = false;
      }
    }

    updatedShowChooseTimes[index] = !updatedShowChooseTimes[index];
    setChooseTimes(updatedShowChooseTimes);
  }

  return (
    <div className={styles.date_container}>
      <div className={styles.mouth_container}>
        <p>{(actualDate.toLocaleDateString('default', { month: 'long' }))} </p>
      </div>

      <div className={styles.days_container}>
        <p className={styles.title}>Dias: </p>
        <div className={styles.day_itens}>
          {calendarData.map((dayData, index) => (
            <CardDay
              key={index}
              day={{ day: dayData.day, date: dayData.date, dayWord: dayData.dayWord }}
              onExpand={handleExpand}
            />
          ))}
        </div>
      </div>

      <div className={styles.times_container}>
      <p className={styles.title}>Horarios: </p>
        {isExpanded && selectedDay && (

          <DayTime
            schedules={schedules}
            showChooseTimes={showChooseTimes}
            timeClick={timeClick}
            day={selectedDay}

          />

        )}

      </div>
    </div>

  );
}

function createCalendar() {
  let date = new Date();
  let week = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
  let calendarData = [];

  let actualDay = date.getDay();
  for (let day = 0; day < 7; day++) {
    if (actualDay == 6) { actualDay = 1; }

    if (actualDay > 0)
      calendarData.push({
        date: date.getDate(),
        dayNumber: day,
        dayWord: week[actualDay - 1]
      })

    actualDay++;
    date.setDate(date.getDate() + 1);
  }

  return calendarData;
}

