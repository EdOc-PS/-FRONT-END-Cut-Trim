/* eslint-disable react/react-in-jsx-scope */


import Days from '../../../components/client-side/scheduling/date';
import HeaderBack from '../../../components/structure/header_back';
import styles from './scheduling.module.css'
function Scheduling() {
    return (
      <section className={styles.scheduling}>

          <HeaderBack title={'Agendamento'} link={'../shop'}/>  
          <Days />
      </section>
    );
  }
  
  export default Scheduling;
  