/* eslint-disable react/react-in-jsx-scope */
import styles from './search.module.css'
export default function Search() {
  return (

    <section className={styles.search_container}>
      <div className={styles.input_container}>
        <i className="fi fi-rr-search"></i>
        <input type="txt" placeholder='Pesquisar'/>
      </div>


    </section>
  );
}


