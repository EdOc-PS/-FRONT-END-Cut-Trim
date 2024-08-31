/* eslint-disable react/react-in-jsx-scope */

import CardShop from '../../../general/card-shop';
import styles from './fieldShop.module.css';
import { useState, useEffect } from 'react';
import { Get } from '../../../../core/service/get';

export default function FieldShop() {
  const [barberShops, setBarberShops] = useState([]);

  useEffect(() => {
    const getBarberShops = async () => {
      Get('http://localhost:8080/cutandtrim/barbershop/find-all')
        .then(jBody => {
          console.log(jBody)
          if (jBody.services !== null)
            setBarberShops(jBody);
          else
          setBarberShops([]);
        }).catch(error => { console.error('Error:', error); });
    }

    getBarberShops();
  }, []);
  return (

    <section className={styles.fieldShop_body}>
      <p>Encontre a sua Barbearia: </p>
      <div className={styles.fieldShop_container}>
        {
          barberShops && barberShops.length > 0 ? (
            barberShops.map((barberShop) =>
              <CardShop barberShop={{ id: barberShop.id, name: barberShop.name }}></CardShop>
            )
          ) : (<p>Sem barbearias disponíveis!</p>)
        } 
      </div>
    </section>
  );
}


