/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import styles from'./header.module.css'


export default function HeaderBackLine({title, link}) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <header className= {styles.header}>
      <Link to={link}><i className="fi fi-sr-angle-left"></i></Link>
      <h1>{title}</h1>
    </header>
  );
}


