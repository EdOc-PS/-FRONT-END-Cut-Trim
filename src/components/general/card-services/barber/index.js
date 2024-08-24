import { Link } from 'react-router-dom';
import './index.css'
import { Delete } from '../../../../core/service/delete';

export default function CardService(props) {
  return (
      <div className='card-service'>
        <img src='https://blog.oceane.com.br/wp-content/uploads/2024/03/destaque-corte-americano.jpg'/>

      <div className='service_data'>
        <div className='text_container'>
          <h3>{props.service.name}</h3>
          <p>R$ {props.service.price}</p>
        </div>
        <div className='action_buttons'>
          <button className='btn-delete' onClick={() => deleteService(props.service.id)}>Deletar</button>
          <Link to={'../../../../barber/service/update/'+ props.service.id}>
              <button className='btn-edit'>Editar</button>
          </Link>
        </div>
      </div>
      </div>
  );
}

function deleteService(service_id){
  Delete('http://localhost:8080/cutandtrim/service/delete', {
    'barberShopID': localStorage.getItem('barberShopID'),
    'serviceID': service_id
  }).then(jBody => { 
    window.location.reload();
  }).catch(error => {console.error('Error:', error);});
}

