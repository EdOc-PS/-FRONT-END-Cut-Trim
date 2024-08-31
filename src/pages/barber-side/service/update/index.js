/* eslint-disable react/react-in-jsx-scope */
import styles from'./updateService.module.css'
import { Get } from '../../../../core/service/get.js';
import { Put } from '../../../../core/service/put.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HeaderService } from '../../../../components/barber-side/header-services/index.js';

export default function UpdateService() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    const getServices = async () => {
      Get('http://localhost:8080/cutandtrim/service/find?id=' + id)
        .then(jBody => {
          setName(jBody.name);
          setPrice(jBody.price)
        })
        .catch(error => { console.error('Error:', error); });
    }

    getServices();
  }, []);

  const handleSubmit = (e) =>{ 
    e.preventDefault();

    const updateService = {
      id: id,
      name: name,
      price: parseFloat(price),
      duration: 1,
      status: 'A'
    }

    Put('http://localhost:8080/cutandtrim/service/update', updateService)
    .then(() => { 
      window.location.href = 'http://localhost:3000/barber/service/list';
    })
    .catch(error => {console.error('Error:', error);});
   }

  return (
    <div className={styles.updateService_body}>

      <HeaderService title={'Atualizar Serviços'} paragraph={'Deixe seu serviço o mais atualizado para seus clientes!'}/>
    
      <div className={styles.updateService_container}>
        <form className={styles.form_container} onSubmit={ handleSubmit }>

          <div className={styles.input_body}>
            <label>Nome:</label>
            <div className={styles.input_container}>
              <i className="fi fi-ss-barber-shop"></i>
              <input type="text" name="" id="" value={name} onChange={ (e) => setName(e.target.value ) }/>
            </div>
          </div>

            <div className={styles.input_body}>
              <label>Preço:</label>
              <div className={styles.input_container}>
                <i className="fi fi-sr-usd-circle"></i>
                <input type="text" name="" id="" value={price} onChange={ (e) => setPrice(e.target.value ) }/>
              </div>
            </div>
        
            <button className={styles.btn_continue}>Atualizar</button>

        </form> 
      </div>
    </div >
  );
}

