/* eslint-disable react/react-in-jsx-scope */
import styles from './barberService.module.css';


export default function CardService() {
  return (
      <div className={styles.card_service}>
        <img src='https://blog.oceane.com.br/wp-content/uploads/2024/03/destaque-corte-americano.jpg'/>

      <div className={styles.service_data}>
        <div className={styles.text_container}>
          <h3>Teste</h3>
          <p>R$ 12,00 </p>
        </div>

        <div className={styles.action_buttons}>

          <button className= {styles.btn_delete}> Deletar </button>
          <button className= {styles.btn_edit}> Editar </button>
  
        </div>
      </div>
      </div>
  );
}