/* eslint-disable react/react-in-jsx-scope */

import CardService from '../../../general/card-services/custumer-off';
import styles from './fieldService.module.css';
import { useState, useEffect } from 'react';
import { Get } from '../../../../core/service/get.js';

export default function FieldService(props) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      Get('http://localhost:8080/cutandtrim/barbershop/' + props.barberShop.id)
        .then(jBody => {
          if (jBody.services !== null)
            setServices(jBody.services);
          else
            setServices([]);
        }).catch(error => { console.error('Error:', error); });
    }

    getServices();
  }, []);

  return (

    <section className={styles.fieldService_body}>
        <p>Serviços: </p>
        <div className={styles.fieldService_container}>
          {
          services && services.length > 0 ? (
            services.map((service) =>
              <CardService service={{ id: service.id, name: service.name, price: service.price.toFixed(2) }}></CardService>
            )
          ) : (<p>A Loja está sem serviços!</p>)
        } 
        </div>
    </section>
  );
}


