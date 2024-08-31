/* eslint-disable react/react-in-jsx-scope */

import styles from './banner.module.css'

export default function Banner() {
  return (

    <section className={styles.banner_body}>
      <img src='https://t4.ftcdn.net/jpg/02/10/97/19/360_F_210971959_wXcBYfif7jKeyKkHKhVyOnzQWHawIgK4.jpg' alt='' />

      <div className={styles.info_container}>
        <h1>JUBISCREIA TITULO</h1>
        <div className={styles.address_container}>
          <i className="fi fi-rr-marker"></i>
          <div className={styles.txt_contaienr}>
            <p>Ouro Branco, Rua: Minas Gerais, 107</p>
            <p className={styles.time}>07:00 AM - 16:00 PM</p>
          </div>
        </div>
      </div>

    </section>
  );
}


