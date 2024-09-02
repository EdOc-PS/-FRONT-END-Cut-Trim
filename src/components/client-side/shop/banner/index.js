/* eslint-disable react/react-in-jsx-scope */

import styles from './banner.module.css';
import { useState, useEffect } from 'react';
import { Get, GetImg } from '../../../../core/service/get';

export default function Banner(props) {
  const[barberShopName, setBarberShopName] = useState('Barbearia');
  const[city, setCity] = useState('Ouro Branco');
  const[street, setStreet] = useState('Rua das Flores');
  const[number, setNumber] = useState('123');
  const[openingTime, setOpeningTime] = useState('');
  const[closingTime, setClosingTime] = useState('');
  const [file, setFile] = useState();

  useEffect(() => {
    const getBarberShops = async () => {
      Get('http://localhost:8080/cutandtrim/barbershop/find/' + props.barberShop.id)
        .then(jBody => {
          if(jBody){
            setBarberShopName(jbody.name);
            setCity(jbody.city);
            setStreet(jBody.street);
            setNumber(jBody.number);
          }
        }).catch(error => { console.error('Error:', error); });
    }
    const getImg  = async () => {
    GetImg(`http://localhost:8080/cutandtrim/barbershop/get-image?id=${props.barberShop.id}`)
      .then(blob => {
        if (blob) {
          setFile(URL.createObjectURL(blob));
        }
      })

      .catch(error => {
        console.error('Error:', error);
      });
    } 
    getImg();
    getBarberShops();
  }, []);
  
  return (

    <section className={styles.banner_body}>
      <img src={file} alt='' />

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


