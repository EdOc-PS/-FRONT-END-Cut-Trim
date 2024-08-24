import { Link } from 'react-router-dom';
import './index.css'

export default function CardService(props) {

  return (
    <Link to={'/client/timetable'}>
      <div className='card-body'>
        <img src='https://blog.oceane.com.br/wp-content/uploads/2024/03/destaque-corte-americano.jpg'/>

        <div className='text_container'>
          <h3>{props.service.name}</h3>
          <p>R$ {props.service.price}</p>
        </div>
      </div>
    </Link>
  );
}

