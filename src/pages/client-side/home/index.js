/* eslint-disable react/react-in-jsx-scope */

import FieldShop from '../../../components/client-side/home/fieldShop';
import Search from '../../../components/client-side/home/search';
import Header from '../../../components/structure/header';

function Home() {
    return (
      <section className="scheduling">

          <Header></Header>   
          <Search></Search>
          <FieldShop></FieldShop>

      </section>
    );
  }
  
  export default Home;
  