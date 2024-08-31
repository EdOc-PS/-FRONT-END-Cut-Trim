/* eslint-disable react/react-in-jsx-scope */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Shop from './shop';
import Scheduling from './scheduling'


export default function Client() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path='client'>
          <Route path='home' element={<Home/>}/>
          <Route path='shop/:barberShop_id' element={<Shop/>}/>
          <Route path='scheduling' element={<Scheduling/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
