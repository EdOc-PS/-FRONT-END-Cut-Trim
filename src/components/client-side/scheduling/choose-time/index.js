import styles from'./chooseTime.module.css'
import React, { useState } from 'react';

export default function ChooseTime(scheduling_info){
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    return (
      <div className={styles.background}>
        <div className={styles.schedulingModal}>
            <h2>Data for the scheduling {scheduling_info.date.day + ' ás '+ scheduling_info.date.time + ': 00'}</h2>

            <form className={styles.form_container}>
              <div className={styles.input_body}>
                <label>Name:</label>
                <div className={styles.input_container}>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
              </div>

              <div className={styles.input_body}>
                <label>Phone:</label>
                <div className={styles.input_container}>
                  <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </div>
            </form>
        </div>
      </div>
    )
}