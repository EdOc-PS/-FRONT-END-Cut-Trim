/* eslint-disable react/react-in-jsx-scope */

import CardSelect from '../../../../components/general/card-selectService';

import styles from './menage.module.css';


export default function MenageService() {
  return (
    <section className={styles.menage_body}>

      <div className={styles.nav}></div>
      <div className={styles.menage_container}>

        <div className={styles.field_menage}>
            <CardSelect nome={'Listar'}></CardSelect>
            <CardSelect nome={'Criar'}></CardSelect>
            <CardSelect nome={'Atualizar'}></CardSelect>
        </div>

      </div>

    </section>
  );
}