/* eslint-disable react/react-in-jsx-scope */

import { Outlet } from 'react-router';
import CardSelect from '../../../../components/general/card-selectService';

import styles from './menage.module.css';


export default function MenageService() {
  return (
    <section className={styles.menage_body}>

      <div className={styles.nav}>
        <div></div>
        <ul>
          <li><i class="fi fi-sr-ballot"></i></li>
          <li><i class="fi fi-sr-clock-five"></i></li>
          <li><i class="fi fi-sr-settings-sliders"></i></li>
        </ul>
        <div className='exit'><i class="fi fi-sr-exit-alt"></i></div>
      </div>
      <div className={styles.menage_container}>

        <Outlet/>

      </div>

    </section>
  );
}