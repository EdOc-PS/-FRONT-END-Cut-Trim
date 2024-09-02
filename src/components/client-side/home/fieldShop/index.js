/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import CardShop from '../../../general/card-shop';
import styles from './fieldShop.module.css';

export default function FieldShop(props) {
  const barberShops = props.barberShops;

  return (

    <section className={styles.fieldShop_body}>
      <p>Encontre a sua Barbearia: </p>
      <div className={styles.fieldShop_container}>
        {
          barberShops && barberShops.length > 0 ? (
            barberShops.map((barberShop) =>
              <CardShop key={barberShop.id} barberShop={{ id: barberShop.id, name: barberShop.name }}></CardShop>
            )
          ) : (<p>Sem barbearias disponíveis!</p>)
        } 
      </div>
    </section>
  );
}


