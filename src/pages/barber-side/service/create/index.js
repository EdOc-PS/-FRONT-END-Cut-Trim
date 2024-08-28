
import styles from'./createService.module.css'
import { Post } from '../../../../core/service/post.js';
import { useState } from 'react';

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
    .then( () => window.location.href = 'http://localhost:3000/barber/service/list')
    .catch(error => {console.log(error)})
  }

  return (
    <section className={styles.createService_body}>

      <div className={styles.header_container}>
        <div className={styles.title_container}>
          <h1>Create Service</h1>
          <p>Enter your barbershop information</p>
        </div>
      </div>

      <div className={styles.createService_container}>
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
            <button className={styles.btn_continue}>Create</button>
          </footer>
        </form> 
      </div>
    </section >

  );
}

