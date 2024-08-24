import styles from './header.module.css';

export function HeaderAccount({title, paragraph}) {
  return (
    <div className={styles.header_container}>
      <div className={styles.title_container}>
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );

}