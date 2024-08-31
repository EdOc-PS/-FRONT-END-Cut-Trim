/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import CardService from '../../../../components/general/card-services/barber/index.js';
import { Get } from '../../../../core/service/get.js';
import styles from './listServices.module.css';
import { useState, useEffect } from 'react';
import { HeaderService } from '../../../../components/barber-side/header-services/index.js';


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
        <HeaderService title='Seus Serviços' paragraph="Encontre aqui todos os seus serviços disponiveis"/>
      </div>

      <div className={styles.listServices_container}>
        {
          services && services.length > 0 ? (
            services.map((service) =>
              <CardService service={{ id: service.id, name: service.name, price: service.price.toFixed(2) }}/>
            )
          ) : (<p>You don't have services registered yet</p>)
        }
        
      </div>
    </section>
  );
}