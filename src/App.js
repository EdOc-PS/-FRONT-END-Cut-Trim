/* eslint-disable react/react-in-jsx-scope */


import CreateService from './pages/owner-side/service/create';
import UpdateService from './pages/owner-side/service/update';
import ListServices from './pages/owner-side/service/list';

import Client from './pages/client-side'
import Account from './pages/owner-side/account';
import Service from './pages/owner-side/service';
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

