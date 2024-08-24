import './index.css'

export default function Months() {
  return (
    <section className='months'>

      <div className='user_container'>
        <p>Date and Time</p>
      </div>


      <div className='barber_container'>
        <div className='label'>
          <p>Select a month: </p>
        </div>

        <div className='month_content'>
          <p>setembro</p>
          <i class="fi fi-sr-calendar"></i>
        </div>
      </div>

    </section>
  );
}

