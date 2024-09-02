/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import styles from './cardShop.module.css';
import { GetImg } from '../../../core/service/get';
import { useState, useEffect  } from 'react';

export default function CardShop(props) {

  const [file, setFile] = useState();


  
  useEffect(() => {
    const getImg  = async () => {
    GetImg(`http://localhost:8080/cutandtrim/barbershop/get-image?id=${props.barberShop.id}`)
      .then(blob => {
        if (blob) {
          setFile(URL.createObjectURL(blob));
        }
      })

      .catch(error => {
        console.error('Error:', error);
      });
    }

    getImg();

  }, []);

return (
  <Link to={'../../client/shop/' + props.barberShop.id}>
    <div className={styles.card_body}>
      <img src={file} alt=''/>
      <div className={styles.text_container}>
        <h1>{props.barberShop.name}</h1>
        <p></p>
      </div>
    </div>
  </Link>

);
}

