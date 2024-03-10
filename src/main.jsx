import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './components/login/Login.jsx'
import ProctectLogin from './auth/ProctectLogin.jsx'
import { SignUp } from './components/login/SignUp.jsx'
import { Product } from './components/product/Product.jsx'
import App from './App.jsx'
import Header from './components/Header.jsx'
import { Alert } from 'react-bootstrap'
import NotFound from './components/NotFound.jsx'

var user = true

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Alert >
      If components does not render please 
      <Alert.Link href="https://ecom-backend-1uz5.onrender.com/"> click me </Alert.Link>
       and comeback after 60sec
    </Alert>
   <Router>
      <Routes>
      <Route element={<ProctectLogin user={user}/>}>
      <Route path='/' element={<App /> }/>
      <Route path='/:id' element={<Product />}/>
      <Route path='*' element={<NotFound/>}/>
      </Route>

      <Route element={<ProctectLogin user={!user} redirect='/'/>}>
      <Route path='/login' element={
          <Login/>
        } ></Route>
        <Route path='/signup' element={
          <SignUp/>
        } ></Route>
      </Route>
       
      
      </Routes>
    </Router>
    
  </React.StrictMode>,
)
