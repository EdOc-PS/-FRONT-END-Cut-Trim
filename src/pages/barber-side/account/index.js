import SingUp from './singup';
import Login from './login';
import BarberShop from './barber-shop-register';
import Wellcome from './wellcome';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import styles from './account.module.css'

function Body() {
  return (
    <section className={styles.account_body}>
      <Outlet />
    </section >
  );

}

export default function Account() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='barber' element={<Body />}>
          <Route path='' element={<Wellcome />}/>
          <Route path='singup' element={<SingUp />}/>
          <Route path='register-shop' element={<BarberShop />}/>
          <Route path='login' element={<Login />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
