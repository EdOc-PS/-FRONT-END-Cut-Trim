/* eslint-disable react/react-in-jsx-scope */
import styles from './search.module.css'
export default function Search() {
  return (

    <section className={styles.search_container}>
      <h3>Search</h3>
      <div className={styles.input_container}>
        <i className="fi fi-sr-search"></i>
        <input type="txt" />
      </div>


    </section>
  );
}


