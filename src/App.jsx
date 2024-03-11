import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ProctectLogin from './auth/ProctectLogin';
import {Login} from './components/login/Login'
import {SignUp} from './components/login/SignUp'
import Home from './components/home/Home'
import About from './components/About';
import { Product } from './components/product/Product';
import NotFound from './components/NotFound';

function App() {
  var user = {};
  console.log(window.location.pathname)
  return (
    <React.StrictMode>
    <Router>
      {window.location.pathname!=='/login' && window.location.pathname!=='/signup' && <Header user={user}/>}
      <Routes>
      <Route element={<ProctectLogin user={user} redirect="/" />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/:id" element={<Product />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>
      {window.location.pathname!=='/login' && window.location.pathname!=='/signup' && <About />}
    </Router>
  </React.StrictMode>
  )
}

export default App
