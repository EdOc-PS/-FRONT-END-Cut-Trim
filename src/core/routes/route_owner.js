import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import SingUp from '../../pages/owner-side/account/singup';
import Login from '../../pages/owner-side/account/login';
import BarberShop from '../../pages/owner-side/account/barber-shop-register';
import CreateService from '../../pages/owner-side/service/create';
import ListServices from '../../pages/owner-side/service/list';


export default function RouteBarber() {
    return (

        <Route path='barber'>
            <Route path='account' >
                <Route path='singup' element={<SingUp />} />
                <Route path='barber-shop' element={<BarberShop />} />
                <Route path='login' element={<Login />} />
            </Route>
            <Route path='service' >
                <Route path='create' element={<CreateService />} />
                <Route path='list' element={<ListServices />} />
            </Route>
        </Route>


    );
}