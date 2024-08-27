/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { Post } from '../../../../core/service/post';
import { HeaderAccount } from '../../../../components/barber-side/header-account';
import { Link } from 'react-router-dom';

import styles from './login.module.css'

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginOwner = {
    email: email,
    password: password,
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    Post('http://localhost:8080/cutandtrim/owner-signup', loginOwner)
      .then(jBody => {
        console.log(jBody.id)
        if (jBody.id) {
          localStorage.setItem('barberShopID', jBody.id);
          window.location.href = 'http://localhost:3000/barber/service/list';
        }
      }).catch(error => {
        console.error('Erro:', error);
      });
  }

  return (

    <div className={styles.login_container}>

      <img className={styles.img} src='/assets/images/account.svg' />

      <div className={styles.header_outside}>
        <HeaderAccount title={'Login'} paragraph={'Bem-vindo de volta!'} />
      </div>

      <div className={styles.login_content}>
        <div className={styles.header_inside}>
          <HeaderAccount title={'Login'} paragraph={'Bem-vindo de volta!'} />
        </div>

        <form className={styles.form_container} onSubmit={handleSubmit}>
          <div className={styles.input_field}>
            <div className={styles.input_body}>
              <label>Email:</label>
              <div className={styles.input_container}>
                <i className="fi fi-sr-envelope"></i>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>

            <div className={styles.input_body}>
              <label>Senha:</label>
              <div className={styles.input_container}>
                <i className="fi fi-sr-shield"></i>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <i className="fi fi-sr-eye"></i>
              </div>
            </div>
          </div>
          <footer className={styles.footer}>
            <button className={styles.btn_continue}>Continuar</button>
            <Link to={'/barber/singup'}> Registre</Link>
          </footer>
        </form>

      </div>
    </div >
  );

}