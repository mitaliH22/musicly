// import { useEffect , useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Dashboard from './layout/Dashboard';
import Login from './Components/Login/Auth';
import User from './layout/User';
import Artists from './layout/Artists';
import Albums from './layout/Albums';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path ='/user' element={<User />}></Route>
        <Route path='/artists' element={<Artists />}></Route>
        <Route path='/albums' element={<Albums />}></Route>
      </Routes>
    </div>
  );
}

export default App;
