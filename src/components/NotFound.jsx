import React from 'react'
import NotFoundImg from '../assets/NotFound.png'
import { Link } from 'react-router-dom';
import style from './All.module.css'

 const NotFound = () => {
  return (  
    <div className={style.ot}>
    <img className={style.nf} src={NotFoundImg} alt="" />    
   <div style={{ fontSize:"100px"}}>
    Page Not found
   </div>
   <Link to="/" style={{fontSize:"25px"}}>
   Return Home
   </Link>
    </div>
  )
}

export default NotFound;