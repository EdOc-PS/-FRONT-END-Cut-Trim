/* eslint-disable react/react-in-jsx-scope */


import { HeaderService } from '../../../../components/barber-side/header-services';
import styles from './menage.module.css';
import { Link } from 'react-router-dom';
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

export default function MenageService() {
  defineElement(lottie.loadAnimation);
  

  return (
    <section className={styles.menage_body}>
      <HeaderService title={'Serviços'} paragraph={'Apresente aos seus clientes os melhores serviços!'} />

      <div className={styles.nav}>
        <ul>


          <li className={styles.card_manege}>
            <Link to={'../list'}>
              <h1>Agenda</h1>

              <lord-icon
                 src="https://cdn.lordicon.com/wmlleaaf.json"
                trigger="loop-on-hover"
                colors="primary:#f69c49"
                style={{ width: "150px", height: "150px" }}>
              </lord-icon>

            </Link></li>

          <li className={styles.card_manege}>
            <Link to={'../list'}>
              <h1>Listar</h1>

              <lord-icon
                src="https://cdn.lordicon.com/depeqmsz.json"
                trigger="loop-on-hover"
                colors="primary:#f69c49"
                style={{ width: "150px", height: "150px" }}>
              </lord-icon>
            </Link></li>

          <li className={styles.card_manege}>
            <Link to={'../create'}>
              <h1>Criar</h1>

              <lord-icon
               src="https://cdn.lordicon.com/wkvacbiw.json"
                trigger="loop-on-hover"
                colors="primary:#f69c49"
                style={{ width: "150px", height: "150px" }}>
              </lord-icon>
            </Link></li>

        </ul>
      </div>


    </section>
  );
}