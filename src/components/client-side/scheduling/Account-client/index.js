/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import styles from'./accountClient.module.css'
import React, { useState } from 'react';
import { Post } from '../../../../core/service/post';

export default function AccountClient(scheduling_info){
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
              <div className={styles.same_place}>
                <div>
                  <h1>Dia agendado:</h1>
                  <p>{scheduling_info.date.day + ' ás '+ scheduling_info.date.time + ':00'}</p>
                </div>
                
                <button className={styles.btn_close} onClick={closePopUp}><i className="fi fi-sr-circle-xmark"></i></button>
              </div>
             

              <form className={styles.form_container} onSubmit={handleSubmit}>
                <div className={styles.input_body}>
                  <label>Nome:</label>
                  <div className={styles.input_container}>
                  <i className="fi fi-sr-user"></i>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                </div>

                <div className={styles.input_body}>
                  <label>Telefone:</label>
                  <div className={styles.input_container}>
                    <i className="fi fi-sr-mobile-button"></i>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                </div>

                <button className={styles.btn_continue} onClick={closePopUp}>Continuar</button>
           
              </form>
          </div>
        </div>
        )}
      </div>
    )
}