/* eslint-disable react/react-in-jsx-scope */

import FieldShop from '../../../components/client-side/home/fieldShop';
import Header from '../../../components/structure/header';
import styles_search from '../../../components/client-side/home/search/search.module.css';
import { useState, useEffect } from 'react';
import { Get } from '../../../core/service/get';

import styles from './home.module.css'

function Home() {
  const [barberShops, setBarberShops] = useState([]);
  let [allBarberShops, setAllBarberShops] = useState([]);
  
  useEffect(() => {
    const getBarberShops = async () => {
      Get('http://localhost:8080/cutandtrim/barbershop/find-all')
        .then(jBody => {
          if (jBody){
            setBarberShops(jBody);
            setAllBarberShops(jBody);
          }
        }).catch(error => { console.error('Error:', error); });
    }

    getBarberShops();
  }, []);

    const searchBarberShops = (event) => {
      let search = event.target.value.toLowerCase();
      if(search.length > 0){
        console.log(allBarberShops)
        let filtered_barbers = allBarberShops.filter(barberShop => barberShop.name.toLowerCase().startsWith(search));
        setBarberShops(filtered_barbers)
      }else{
        setBarberShops(allBarberShops)  
      }
    }

    return (
      <section className={styles.home}>

          <Header></Header>   
          <section className={styles_search.search_container}>
            <div className={styles_search.input_container}>
              <i className="fi fi-rr-search"></i>
              <input type="text" placeholder='Pesquisar' onInput={searchBarberShops}/>
            </div>
          </section>
          <FieldShop barberShops={barberShops}></FieldShop>

      </section>
    );
  }
  
  export default Home;
  