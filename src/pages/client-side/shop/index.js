/* eslint-disable react/react-in-jsx-scope */

import Banner from '../../../components/client-side/shop/banner';
import FieldService from '../../../components/client-side/shop/fieldService';
import HeaderBack from '../../../components/structure/header_back';


import styles from './shop.module.css'

export default function Shop() {
    return (
      <section className={styles.shop}>
          <HeaderBack title={'Serviços'} link={'../home'}/>
          <Banner />
          <FieldService />
      </section>
    );
  }

  