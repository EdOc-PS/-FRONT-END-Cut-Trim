/* eslint-disable react/react-in-jsx-scope */

import { Outlet } from 'react-router';
import CardSelect from '../../../../components/general/card-selectService';

import styles from './menage.module.css';
import { Link } from 'react-router-dom';


export default function MenageService() {
  return (
    <section className={styles.menage_body}>

      <div className={styles.nav}>
        <div></div>
        <ul>
          
          <li><i className="fi fi-sr-clock-five"></i></li>
          <li><Link to={'list'}><i className="fi fi-sr-ballot"></i></Link></li>
          <li><Link to={'create'}><i className="fi fi-sr-pen-clip"></i></Link></li>

        </ul>
        <div className='exit'><i class="fi fi-sr-exit-alt"></i></div>
      </div>
      <div className={styles.menage_container}>

        <Outlet />

      </div>

    </section>
  );
}