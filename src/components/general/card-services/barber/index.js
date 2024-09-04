/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import styles from './barberService.module.css'
import { Delete } from '../../../../core/service/delete';

export default function CardService(props) {
  return (
      <div className={styles.card_service}>
      <div className={styles.service_data}>
        <div className={styles.text_container}>
          <h3>{props.service.name}</h3>
          <p>R$ {props.service.price}</p>
        </div>
        <div className={styles.action_buttons}>
          <button className={styles.btn} onClick={() => deleteService(props.service.id)}>Deletar</button>
          <Link to={'../../../../barber/update/'+ props.service.id}>
              <button className={styles.btn}>Editar</button>
          </Link>
        </div>
      </div>
      </div>
  );
}

function deleteService(service_id){
  Delete('http://localhost:8080/cutandtrim/service/delete', {
    'barberShopID': localStorage.getItem('barberShopID'),
    'serviceID': service_id
  }).then(jBody => { 
    window.location.reload();
  }).catch(error => {console.error('Error:', error);});
}

