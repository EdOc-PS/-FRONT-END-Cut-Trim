/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import styles from './costumerService.module.css'

export default function CardService(props) {
  const service_info = {
    barberShop_id: props.service.barberShop_id,
    service_id: props.service.id
  }
  
  return (
    <Link to={'/client/scheduling'} state={service_info} >
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

