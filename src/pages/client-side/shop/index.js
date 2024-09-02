/* eslint-disable react/react-in-jsx-scope */

import Banner from '../../../components/client-side/shop/banner';
import FieldService from '../../../components/client-side/shop/fieldService';

import { useParams } from 'react-router-dom';

import styles from './shop.module.css'
import HeaderBackLine from '../../../components/structure/header_back_line';
import Alert from '../../../components/structure/alert_screen';

export default function Shop() {
  const { barberShop_id } = useParams();
  
    return (
      <section className={styles.shop}>
          <Alert/>
          <HeaderBackLine title={'Serviços'} link={'../home'}/>
          <Banner barberShop = {{ id: barberShop_id }}/>
          <FieldService barberShop = {{ id: barberShop_id }}/>
      </section>
    );
  }

  