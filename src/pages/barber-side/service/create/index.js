/* eslint-disable react/react-in-jsx-scope */

import styles from './createService.module.css'
import { Post } from '../../../../core/service/post.js';
import { useState } from 'react';
import { HeaderAccount } from '../../../../components/barber-side/header-account/index.js';
import { HeaderService } from '../../../../components/barber-side/header-services/index.js';

export default function CreateService() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const service = {
      "barberShopID": localStorage.getItem('barberShopID'),
      "service": {
        "name": name,
        "price": parseFloat(price),
        "duration": 1
      }
    }

    Post('http://localhost:8080/cutandtrim/barbershop/add-service', service)
      .then(() => window.location.href = 'http://localhost:3000/barber/list')
      .catch(error => { console.log(error) })
  }

  return (
    <div className={styles.createService_body}>

       <HeaderService title={'Criar Serviços'} paragraph={'Apresente aos seus clientes os melhores serviços!'} />

      <div className={styles.createService_container}>
        <form className={styles.form_container} onSubmit={handleSubmit}>

          <div className={styles.input_body}>
            <label>Nome:</label>
            <div className={styles.input_container}>
              <i className="fi fi-ss-barber-shop"></i>
              <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>

          <div className={styles.input_body}>
            <label>Preço:</label>
            <div className={styles.input_container}>
              <i className="fi fi-sr-usd-circle"></i>
              <input type="text" name="" id="" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
          </div>

          <button className={styles.btn_continue}>Criar Serviço</button>

        </form>
      </div>
    </div >

  );
}

