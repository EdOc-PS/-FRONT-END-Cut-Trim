import CreateService  from './create';
import ListServices from './list';
import MenageService from './manage';
import UpdateService from './update';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';



export default function Service() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path='barber'>
          <Route path='service' >
            <Route path='create' element={<CreateService />} />
            <Route path='list' element={<ListServices />} />
            <Route path='update/:id' element={<UpdateService />} />
            <Route path='' element={<MenageService />}/>
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
