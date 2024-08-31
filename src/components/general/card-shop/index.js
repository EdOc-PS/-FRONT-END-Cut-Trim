/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import styles from'./cardShop.module.css'

export default function CardShop({nome, link}) {
  const barberShop_id = 'ff214b29-0dd9-4703-a64d-67a218cf553d';
  return (
      <Link to={'../../client/shop/'+barberShop_id}>
        <div className={styles.card_body}>
          <img src={link}/>
          <div className={styles.text_container}>
            <h1>{nome}</h1>
          </div>
          <div className={styles.btn_container}>
            <button>Choose</button>
          </div>     
        </div>
      </Link>

  );
}

