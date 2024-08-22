/* eslint-disable react/react-in-jsx-scope */

import styles from'./cardShop.module.css'

export default function CardShop({nome, link}) {

  return (
  
      <div className={styles.card_body}>
        <img src={link}/>
        <div className={styles.text_container}>
          <h1>{nome}</h1>
        </div>
        <div className={styles.btn_container}>
          <button>Choose</button>
        </div>
     
      </div>

  );
}

