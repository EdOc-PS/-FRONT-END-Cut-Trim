/* eslint-disable react/react-in-jsx-scope */
import styles from'./header.module.css'


export default function Header() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <header className= {styles.header}>
      <h1>CUT&TRIM</h1>
      <i className="fi fi-sr-bell"></i>
    </header>
  );
}


