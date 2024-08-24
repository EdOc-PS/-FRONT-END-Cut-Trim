/* eslint-disable react/react-in-jsx-scope */


import CreateService from './pages/barber-side/service/create';
import UpdateService from './pages/barber-side/service/update';
import ListServices from './pages/barber-side/service/list';

import Client from './pages/client-side'
import Account from './pages/barber-side/account';
import Service from './pages/barber-side/service';
import './App.css';

export default function App() {
  return (

    <>
      <Client></Client>
      <Account></Account>
      <Service></Service>
    </>
  );
}

