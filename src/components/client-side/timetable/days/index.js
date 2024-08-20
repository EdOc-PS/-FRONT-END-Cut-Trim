import CardDay from '../../../general/card-days';
import './index.css'

export default function Days() {
  const calendarData = createCalendar();
  const actualDate = new Date();
return (
    <section className='days'>

      <div className='day_container'>
        <div className='label'>
          <p>Date:{actualDate.getDate()+'/'+ (actualDate.getMonth() + 1)+'/'+actualDate.getFullYear()} </p>
        </div>

        <div className='day_itens'>
        {calendarData.map((dayData, index) => (
          <CardDay key={index} day= { { day: dayData.day, date: dayData.date, dayWord: dayData.dayWord} } />
        ))}
        </div>
      </div>

    </section>
  );
}

function createCalendar(){
  let date = new Date();
  let week = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira'];
  let calendarData = [];

  let actualDay = date.getDay();
  for(let day = 0; day < 7; day++){
      if(actualDay == 6){ actualDay = 1; }

      if(actualDay > 0)
      calendarData.push({
          date: date.getDate() + '/'+ (date.getMonth() + 1),
          dayNumber: day,
          dayWord: week[actualDay - 1]
      })

      actualDay++;    
      date.setDate(date.getDate() + 1);
  }

  return calendarData;
}

