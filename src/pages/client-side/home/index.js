/* eslint-disable react/react-in-jsx-scope */

import FieldShop from '../../../components/client-side/home/fieldShop';
import Search from '../../../components/client-side/home/search';
import Header from '../../../components/structure/header';

import styles from './home.module.css'

function Home() {
    return (
      <section className={styles.home}>

          <Header></Header>   
          <Search></Search>
          <FieldShop></FieldShop>

      </section>
    );
  }
  
  export default Home;
  