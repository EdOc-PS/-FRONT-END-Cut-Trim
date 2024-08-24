import styles from'./chooseTime.module.css'
import React, { useState } from 'react';
import { Post } from '../../../../core/service/post';

export default function ChooseTime(scheduling_info){
    const[expanded, setExpanded] = useState(true);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const closePopUp = () => { setExpanded(false); }
    const handleSubmit = (e) => {
      e.preventDefault();
      
      let scheduling =  {
        barberShopID: localStorage.getItem('barberShopID'),
        customer_id: localStorage.getItem('customer_id')
      }

      Post('http://localhost:8080/cutandtrim/signup', loginBarber)
        .then(jBody => {
          
        }).catch(error => {

        });
    }

    return (
      <div>
        {expanded && (
        <div className={styles.background}>
          <div className={styles.schedulingModal}>
              <h2>Data for the scheduling {scheduling_info.date.day + ' ás '+ scheduling_info.date.time + ': 00'}</h2>

              <form className={styles.form_container} onSubmit={handleSubmit}>
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

                <button type="button" onClick={closePopUp}>Fechar</button>
              </form>
          </div>
        </div>
        )}
      </div>
    )
}