import { Link } from 'react-router-dom';
import CardService from '../../../../components/general/card-services/barber/index.js';
import { HeaderAccount } from '../../../../components/barber-side/header-account/';
import { Get } from '../../../../core/service/get.js';
import styles from './listServices.module.css';
import { useState, useEffect } from 'react';


export default function ListServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      Get('http://localhost:8080/cutandtrim/barbershop/' + localStorage.getItem('barberShopID'))
        .then(jBody => {
          if (jBody.services !== null)
            setServices(jBody.services);
          else
            setServices([]);
        })
        .catch(error => { console.error('Error:', error); });
    }

    getServices();
  }, []);

  return (
    <section className={styles.listServices_body}>
      <div className={styles.header_container}>
        <HeaderAccount title='List Services' paragraph="All Service's from your barber shop"></HeaderAccount>
      </div>

      <div className={styles.listServices_container}>

        {
          services && services.length > 0 ? (
            services.map((service) =>
              <CardService service={{ id: service.id, name: service.name, price: service.price }}></CardService>
            )
          ) : ( <p>You don't have services registered yet </p>)
        }
    
      </div>

    </section>
  );
}