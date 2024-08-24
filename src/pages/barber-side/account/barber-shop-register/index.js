
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Post } from '../../../../core/service/post.js';
import { HeaderAccount } from '../../../../components/barber-side/header-account';
import styles from './barberShop.module.css'


export default function BarberShop() {

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [cep, setCep] = useState('');
  const [neighborhood, setNeighborhood] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    var newBarberShop = {
      barber: {
        name: sessionStorage.getItem("barberName"),
        email: sessionStorage.getItem("barberEmail"),
        password: sessionStorage.getItem("barberPassword"),
      },
      barberShop: {
        name: name,
        city: city,
        state: state,
        street: street,
        number: number,
        openingTime: 9,
        closingTime: 18,
        lunchTimeStart: 12,
        lunchTimeEnd: 13,
        cep: cep,
        neighborhood: neighborhood
      }
    }

    Post('http://localhost:8080/cutandtrim/barber/register-brshp', newBarberShop)
      .then(jBody => {
        if (typeof jBody.barberShop.id !== 'undefined') {
          localStorage.setItem('barberShopID', jBody.barberShop.id);
          window.location.href = 'http://localhost:3000/barber/service/list';
        }
      })
      .catch(error => {
        console.error('Erro:', error);
      });


  }

  return (
    <div className={styles.registerShop_container}>
      <img className={styles.img} src='/assets/images/register.svg' />

      <div className={styles.header_outside}>
        <HeaderAccount title={'Barber Shop'} paragraph={'Enter your personal information'} />
      </div>

      <div className={styles.registerShop_content}>
        <div className={styles.header_inside}>
          <HeaderAccount title={'Barber Shop'} paragraph={'Enter your personal information'} />
        </div>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <div className={styles.input_field}>
            <div className={styles.input_body}>
              <label>Name:</label>
              <div className={styles.input_container}>
                <i className="fi fi-sr-employee-man-alt"></i>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>

            <div className={styles.same_place}>
              <div className={styles.input_body}>
                <label>City</label>
                <div className={styles.input_container}>
                  <i className="fi fi-sr-europe-flag"></i>
                  <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
              </div>

              <div className={styles.input_body}>
                <label>CEP:</label>
                <div className={styles.input_container}>
                  <i className="fi fi-sr-city"></i>
                  <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
                </div>
              </div>
            </div>

            <div className={styles.same_place}>
              <div className={styles.input_body}>
                <label>Neighborhood: </label>
                <div className={styles.input_container}>
                  <i className="fi fi-sr-house-chimney-blank"></i>
                  <input type="text" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} />
                </div>
              </div>
              <div className={styles.input_body}>
                <label>State</label>
                <div className={styles.input_container}>
                  <i className="fi fi-sr-europe-flag"></i>
                  <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
                </div>
              </div>

            </div>

            <div className={styles.same_place}>
              <div className={styles.input_body}>
                <label>Street</label>
                <div className={styles.input_container}>
                  <i className="fi fi-sr-city"></i>
                  <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
                </div>
              </div>

              <div className={styles.input_body}>
                <label>Number:</label>
                <div className={styles.input_container}>
                  <i className="fi fi-sr-house-chimney-blank"></i>
                  <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
                </div>
              </div>

            </div>
          </div>
          <footer className={styles.footer}>
            <button className={styles.btn_continue}>Register</button>
            <Link to={'/barber/login'}> Login </Link>
          </footer>

        </form>

      </div>
    </div>
  );

}



