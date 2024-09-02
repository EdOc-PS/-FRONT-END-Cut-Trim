/* eslint-disable react/react-in-jsx-scope */


import Days from '../../../components/client-side/scheduling/date';
import HeaderBack from '../../../components/structure/header_back';
import styles from './scheduling.module.css';
import { useState, useEffect } from 'react';
import { Get } from '../../../core/service/get';
import { useLocation } from 'react-router-dom';
import Alert from '../../../components/structure/alert_screen';

function Scheduling() {
  const location = useLocation();
  const {barberShop_id, service_id} = location.state;

  const [openingTime, setOpeningTime] = useState(7);
  const [closingTime, setClosingTime] = useState(19);
  const [lunchTimeStart, setLunchTimeStart] = useState(12);
  const [lunchTimeEnd, setLunchTimeEnd] = useState(13);
  
  useEffect(() => {
    const getBarberShops = async () => {
      Get('http://localhost:8080/cutandtrim/barbershop/find?id='+ barberShop_id)
        .then(jBody => {
          if (jBody){
            setOpeningTime(jBody.openingTime);
            setClosingTime(jBody.closingTime);
            setLunchTimeStart(jBody.lunchTimeStart);
            setLunchTimeEnd(jBody.lunchTimeEnd);
          }
        }).catch(error => { console.error('Error:', error); });
    }

    getBarberShops();
  }, []);

    return (
      <section className={styles.scheduling}>
           <Alert/>
          <HeaderBack title={'Agendamento'} link={'../shop'}/>  
          <Days time={{ 
            openingTime: openingTime,
            closingTime: closingTime,
            lunchTimeStart: lunchTimeStart,
            lunchTimeEnd:lunchTimeEnd
           }}/>
      </section>
    );
  }
  
  export default Scheduling;
  