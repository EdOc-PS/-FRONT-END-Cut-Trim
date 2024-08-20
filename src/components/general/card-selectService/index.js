/* eslint-disable react/react-in-jsx-scope */

import styles from'./cardSelect.module.css'

export default function CardSelect({nome}) {

  return (
      <div className={styles.card_body}>
        
        <div className={styles.icon_container}>
        <i className="fi fi-sr-ballot"></i>
        </div>

        <div className={styles.text_container}>
          <h1>{nome}</h1>
        </div>

      </div>

  );
}

