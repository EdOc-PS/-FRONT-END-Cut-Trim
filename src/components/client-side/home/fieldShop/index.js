/* eslint-disable react/react-in-jsx-scope */

import CardShop from '../../../general/card-shop';
import styles from './fieldShop.module.css'

export default function FieldShop() {
  return (

    <section className={styles.fieldShop_body}>
      <p>Nearby Barbershop</p>
      <div className={styles.fieldShop_container}>
        <CardShop nome={'Barber-Shop'} link={'https://www.logoground.com/uploads12/dv12y2023291062023-08-113897811Handsome%20Barbershop.jpg'}></CardShop>
        <CardShop nome={'Barber-Test'} link={'https://t4.ftcdn.net/jpg/02/10/97/19/360_F_210971959_wXcBYfif7jKeyKkHKhVyOnzQWHawIgK4.jpg'}></CardShop>
        <CardShop nome={'Cut-Trim'} link={'https://t3.ftcdn.net/jpg/03/82/25/90/360_F_382259080_rJJ6elKCfhJpaVTwIhXsaiy6JhhsmpDT.jpg'}></CardShop>
      </div>
    </section>
  );
}


