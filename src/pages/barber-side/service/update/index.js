import styles from'./updateService.module.css'
import { Get } from '../../../../core/service/get.js';
import { Put } from '../../../../core/service/put.js';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function UpdateService() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [durationTime, setDurationTime] = useState('');

  const handleSubmit = (e) =>{ 
    e.preventDefault();

    const updateService = {
      id: id,
      name: name,
      price: parseFloat(price),
      duration: parseFloat(durationTime),
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


          <div className={styles.same_place}>

            <div className={styles.input_body}>
              <label>Preço:</label>
              <div className={styles.input_container}>
                <i className="fi fi-sr-usd-circle"></i>
                <input type="text" name="" id="" value={price} onChange={ (e) => setPrice(e.target.value ) }/>
              </div>
            </div>

            <div className={styles.input_body}>
              <label>Tempo de duração:</label>
              <div className={styles.input_container}>
                <i className="fi fi-sr-clock-three"></i>
                <select className={styles.select_service_time} value={durationTime} onChange={ (e) => setDurationTime(e.target.value ) }>
                  <option value="" disabled selected>Tempo de duração</option>
                  <option className={styles.option_time} value="0.5">30 minutos</option>
                  <option className={styles.option_time} value="1">1 hora</option>
                  <option className={styles.option_time} value="1.5">1 hora e 30 minutos</option>
                  <option className={styles.option_time} value="2">2 horas</option>
                </select>
              </div>
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

