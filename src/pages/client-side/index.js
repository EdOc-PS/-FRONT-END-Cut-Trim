
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Scheduling from './scheduling';



export default function Client() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='client'>

          <Route path='home' element={<Scheduling />}/>
          <Route path='home' element={<Scheduling />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
