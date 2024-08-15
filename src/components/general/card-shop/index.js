/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import styles from'./cardShop.module.css'

export default function CardShop({nome, link}) {

  return (
  
      <div className={styles.card_body}>
       
        <div className={styles.text_container}>
          <h1>{nome}</h1>
        </div>
        <div className={styles.background}></div>
        <img src={link}/>
      
      </div>

  );
}

