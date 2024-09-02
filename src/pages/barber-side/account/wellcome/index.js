
import { Link } from 'react-router-dom';
import styles from './wellcome.module.css'


export default function Wellcome() {
  return (


    <div className={styles.wellcome_container}>

      <img className={styles.img} src='/assets/images/barbershop.svg' />

      <div className={styles.wellcome_content}>

        <div className={styles.text_container}>
          <h1>CUT&TRIM</h1>
          <h2>Tudo o que você precisa está tudo em um só lugar.</h2>
          <p>
            Apresentamos o Cut&Trim: o site que permite agendar consultas em barbearias e explorar estilos — tudo em um só lugar
          </p>
        </div>

        <div className={styles.buttons_container}>
          <Link to={'/barber/singup'}><button className={styles.btn_account}>Registrar</button></Link>
          <Link to={'/barber/login'}><button className={styles.btn_login_account}>Login</button></Link>
        </div>
      </div>


    </div >
  );

}
