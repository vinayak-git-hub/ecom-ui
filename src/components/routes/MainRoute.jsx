import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../../App';
import { Product } from '../product/Product';
import Header from '../Header'

const MainRoute = () => {
  return (
  <React.StrictMode>
  <Router>
   <Routes>
      <Route path='/' element={<App/>}/>
      {/* <Route path='/xyz' element={<App/>}/> */}
    </Routes>
   </Router>
  </React.StrictMode>
  )
}


export default MainRoute;