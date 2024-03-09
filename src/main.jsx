import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './components/login/Login.jsx'
import ProctectLogin from './auth/ProctectLogin.jsx'
import { SignUp } from './components/login/SignUp.jsx'
import { Product } from './components/Product.jsx'

var user = true

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
      <Routes>
      <Route element={<ProctectLogin user={user}/>}>
      <Route path='/' element={<App/>}/>
      <Route path='/:id' element={<Product/>}/>
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
