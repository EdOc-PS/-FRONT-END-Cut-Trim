/* eslint-disable react/react-in-jsx-scope */

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Post } from '../../../../core/service/post.js';
import { HeaderAccount } from '../../../../components/barber-side/header-account';
import styles from './barberShop.module.css'


export default function BarberShop() {
  const times = setTimes();
  const lunchTimes = setLunchTimes();
  const [name, setName] = useState('');
  const [openingTime, setOpeningTime] = useState(7);
  const [closingTime, setClosingTime] = useState(19);
  const [lunchTimeStart, setLunchTimeStart] = useState(12);
  const [lunchTimeEnd, setLunchTimeEnd] = useState(13);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [cep, setCep] = useState('');
  const [neighborhood, setNeighborhood] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    var newBarberShop = {
      owner: {
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
        openingTime: openingTime,
        closingTime: closingTime,
        lunchTimeStart: lunchTimeStart,
        lunchTimeEnd: lunchTimeEnd,
        cep: cep,
        neighborhood: neighborhood
      }
    }

    Post('http://localhost:8080/cutandtrim/owner/register', newBarberShop)
      .then(jBody => {
        if (jBody.barberShop.id) {
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
        <HeaderAccount title={'Barbearia'} paragraph={'Insira as informações da barbearia'} />
      </div>

      <div className={styles.registerShop_content}>
        <div className={styles.header_inside}>
          <HeaderAccount title={'Barbearia'} paragraph={'Insira as informações da barbearia'} />
        </div>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <div className={styles.input_field}>
            <div className={styles.input_body}>
              <label>Nome da Barbearia:</label>
              <div className={styles.input_container}>
                <i className="fi fi-sr-barber-pole"></i>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>

            <div className={styles.same_place}>
              <div className={styles.input_body}>
                <label>Horário de abertura</label>
                <div className={styles.input_container}>
                  <i class="fi fi-rr-time-forward"></i>
                  <select value={openingTime} onChange={(e) => setOpeningTime(e.target.value)}>
                    {(
                      times.map( (time) => 
                        <option key={'OpeningTime-'+time} value={time}>{time} : 00</option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div className={styles.input_body}>
                <label>Hórario de Encerramento</label>
                <div className={styles.input_container}>
                  <i class="fi fi-rr-time-past"></i>
                  <select value={closingTime} onChange={(e) => setClosingTime(e.target.value)}>
                    {(
                      times.map( (time) => 
                        <option key={'ClosingTime-'+time} value={time}>{time} : 00</option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>

            <div className={styles.same_place}>
              <div className={styles.input_body}>
                <label>Início do almoço</label>
                <div className={styles.input_container}>
                  <i class="fi fi-tr-sandwich"></i>
                  <select value={lunchTimeStart} onChange={(e) => setLunchTimeStart(e.target.value)}>
                    {(
                      lunchTimes.map( (lunchTime) => 
                        <option key={'LunchTimeStart-'+lunchTime} value={lunchTime}>{lunchTime} : 00</option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div className={styles.input_body}>
                <label>Fim do almoço</label>
                <div className={styles.input_container}>
                  <i class="fi fi-tr-sandwich"></i>
                  <select value={lunchTimeEnd} onChange={(e) => setLunchTimeEnd(e.target.value)}>
                    {(
                      lunchTimes.map( (lunchTime) => 
                        <option key={'LunchTimeEnd-'+lunchTime} value={lunchTime}>{lunchTime} : 00</option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>

            <div className={styles.same_place}>
              <div className={styles.input_body}>
                <label>Cidade</label>
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
                <label>Bairro: </label>
                <div className={styles.input_container}>
                  <i className="fi fi-sr-house-chimney-blank"></i>
                  <input type="text" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} />
                </div>
              </div>
              <div className={styles.input_body}>
                <label>Estado:</label>
                <div className={styles.input_container}>
                  <i className="fi fi-sr-europe-flag"></i>
                  <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
                </div>
              </div>

            </div>

            <div className={styles.same_place}>
              <div className={styles.input_body}>
                <label>Rua:</label>
                <div className={styles.input_container}>
                  <i className="fi fi-sr-city"></i>
                  <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
                </div>
              </div>

              <div className={styles.input_body}>
                <label>Numero:</label>
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

  function setTimes(){
    let times = [];
    for(let time = 7; time <= 19;time++){
      times.push(time);
    }

    return times;
  }

  function setLunchTimes(){
    let lunchTimes = [];
    for(let time = 11; time <= 15;time++){
      lunchTimes.push(time);
    }

    return lunchTimes;
  }

}



