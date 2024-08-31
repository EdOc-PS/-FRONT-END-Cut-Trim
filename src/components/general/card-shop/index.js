/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import styles from'./cardShop.module.css'

export default function CardShop(props) {
  return (
      <Link to={'../../client/shop/'+ props.barberShop.id}>
        <div className={styles.card_body}>
          <div className={styles.text_container}>
            <h1>{ props.barberShop.name }</h1>
            <p></p>
          </div>
          <div className={styles.btn_container}>
            <button>Choose</button>
          </div>     
        </div>
      </Link>

  );
}

