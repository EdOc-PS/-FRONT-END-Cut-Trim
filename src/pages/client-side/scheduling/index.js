/* eslint-disable react/react-in-jsx-scope */

import Days from '../../../components/client-side/timetable/days';
import Search from '../../../components/client-side/home/search';
import Header from '../../../components/structure/header';

function Scheduling() {
    return (
      <section className="scheduling">

          <Header></Header>   
          <Days></Days>

      </section>
    );
  }
  
  export default Scheduling;
  