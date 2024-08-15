import CardDay from '../../general/card-days';
import './index.css'

export default function Days() {
  return (
    <section className='days'>

      <div className='day_container'>
        <div className='label'>
          <p>Date: </p>
        </div>

        <div className='day_itens'>
          <CardDay/>
          <CardDay/>
          <CardDay/>
          <CardDay/>
          <CardDay/>
          <CardDay/>
        </div>
      </div>

    </section>
  );
}

