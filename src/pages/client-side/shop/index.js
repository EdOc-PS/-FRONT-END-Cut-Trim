/* eslint-disable react/react-in-jsx-scope */

import Banner from '../../../components/client-side/shop/banner';
import FieldService from '../../../components/client-side/shop/fieldService';
import HeaderBack from '../../../components/structure/header_back';
import { useParams } from 'react-router-dom';

import styles from './shop.module.css'

export default function Shop() {
  const { barberShop_id } = useParams();
  
    return (
      <section className={styles.shop}>
          <HeaderBack title={'Serviços'} link={'../home'}/>
          <Banner />
          <FieldService barberShop = {{ id: barberShop_id }}/>
      </section>
    );
  }

  