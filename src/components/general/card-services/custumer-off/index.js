/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import styles from './costumerService.module.css'

export default function CardService(props) {

  

  return (
    <Link to={'scheduling'}>
      <div className={styles.card_body}>
        <i className="fi fi-sr-hair-clipper"></i>

        <div className={styles.text_container}>
          <h3>{props.service.name}</h3>
          <p>1 hora</p>
        </div>

        <div className={styles.price_container}>
          <p>R$ {props.service.price}</p>
        </div>

      </div>
    </Link>
  );
}

