/* eslint-disable react/react-in-jsx-scope */

import styles from './banner.module.css';
import { useState, useEffect } from 'react';
import { Get } from '../../../../core/service/get';

export default function Banner(props) {
  const[barberShopName, setBarberShopName] = useState('Barbearia');
  const[city, setCity] = useState('Ouro Branco');
  const[street, setStreet] = useState('Rua das Flores');
  const[number, setNumber] = useState('123');
  const[openingTime, setOpeningTime] = useState('');
  const[closingTime, setClosingTime] = useState('');

  useEffect(() => {
    const getBarberShopInfo = async () => {
      Get('http://localhost:8080/cutandtrim/barbershop/find?id=' + props.barberShop.id)
        .then(jBody => {
          if(jBody){
            setBarberShopName(jBody.name);
            setCity(jBody.city);
            setStreet(jBody.street);
            setNumber(jBody.number);
          }
        }).catch(error => { console.error('Error:', error); });
    }

    getBarberShopInfo();
  }, []);

  return (

    <section className={styles.banner_body}>
      <img src='https://t4.ftcdn.net/jpg/02/10/97/19/360_F_210971959_wXcBYfif7jKeyKkHKhVyOnzQWHawIgK4.jpg' alt='' />

      <div className={styles.info_container}>
        <h1>{barberShopName}</h1>
        <div className={styles.address_container}>
          <i className="fi fi-rr-marker"></i>
          <div className={styles.txt_contaienr}>
            <p>{city}, {street}, {number}</p>
            <p className={styles.time}>{openingTime} AM - {closingTime} PM</p>
          </div>
        </div>
      </div>

    </section>
  );
}


