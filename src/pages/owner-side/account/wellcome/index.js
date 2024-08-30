
import { Link } from 'react-router-dom';
import styles from './wellcome.module.css'


export default function Wellcome() {
  return (


    <div className={styles.wellcome_container}>

      <img className={styles.img} src='/assets/images/barbershop.svg' />

      <div className={styles.wellcome_content}>

        <div className={styles.text_container}>
          <h1>CUT&TRIM</h1>
          <h2>Everything you need is all in one place</h2>
          <p>
            Introducing Cut&Trim: the app that lets you book barbershop appointments and browse styles—all in one place.
          </p>
        </div>

        <div className={styles.buttons_container}>
          <Link to={'/barber/singup'}><button className={styles.btn_account}>Create account</button></Link>
          <Link to={'/barber/login'}><button className={styles.btn_login_account}>Login</button></Link>
        </div>
      </div>


    </div >
  );

}
