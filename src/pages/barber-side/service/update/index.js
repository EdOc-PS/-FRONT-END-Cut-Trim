import styles from'./updateService.module.css'
import { Get } from '../../../../core/service/get.js';
import { Put } from '../../../../core/service/put.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    <section className={styles.updateService_body}>

      <div className={styles.header_container}>
        <div className={styles.title_container}>
          <h1>Update Service</h1>
          <p>Enter your barbershop information</p>
        </div>
      </div>

      <div className={styles.updateService_container}>
        <form className={styles.form_container} onSubmit={ handleSubmit }>
          <div className={styles.input_body}>
            <label>Name:</label>
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
          <footer className={styles.footer}>
            <button className={styles.btn_continue}>Update</button>
          </footer>
        </form> 
      </div>
    </section >
  );
}

