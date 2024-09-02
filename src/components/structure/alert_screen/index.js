/* eslint-disable react/react-in-jsx-scope */
import styles from './alert.module.css'


export default function Alert() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <section className={styles.alert_container}>
      <div className={styles.text_container}> 
        <h1>Desculpe :( </h1>
        <p>Este site não está otimizado para esta resolução. </p>
        <p> Por favor, altere para a visualização em dispositivo móvel para uma melhor experiência.</p> 
      </div>

      <img src='/assets/images/sad.svg' alt='' />
    </section>
  );
}


