/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import styles from './costumerService.module.css'

export default function CardService() {

  return (
    <Link to={'scheduling'}>
      <div className={styles.card_body}>
        <i className="fi fi-sr-hair-clipper"></i>

        <div className={styles.text_container}>
          <h3>Teste</h3>
          <p>1 hour</p>
        </div>

        <div className={styles.price_container}>
          <p>12,00</p>
        </div>

      </div>
    </Link>
  );
}

