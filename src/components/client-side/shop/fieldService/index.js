/* eslint-disable react/react-in-jsx-scope */

import CardService from '../../../general/card-services/custumer-off';
import styles from './fieldService.module.css'

export default function FieldService() {
  return (

    <section className={styles.fieldService_body}>
        <p>Services: </p>
        <div className={styles.fieldService_container}> 
            <CardService></CardService>
            <CardService></CardService>
        </div>
    </section>
  );
}


