/* eslint-disable react/react-in-jsx-scope */
import CreateService from './create';
import ListServices from './list';
import MenageService from './manage';
import UpdateService from './update';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function Body() {
  return (
    <section >
      <Outlet />
    </section >
  );

}

export default function Service() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='barber' element={<Body />}>

          <Route path='service' element={<MenageService />} />
          <Route path='create' element={<CreateService />} />
          <Route path='list' element={<ListServices />} />
          <Route path='update/:id' element={<UpdateService />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}
