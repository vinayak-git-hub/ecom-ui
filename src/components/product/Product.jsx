import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { ItemGrid } from '../home/ItemGrid';
import { getProduct } from '../../api/Api';
import Header from '../Header';
import About from '../About';

export const Product = () => {
    const location = useLocation().pathname
  const myParam = location.substring(1, location.length)
  const [product, setProduct] = useState({})

  useEffect(()=>{
    const run = async () => {
      const prod = await getProduct(myParam)
      if(prod){setProduct(prod)}
    }
    run()
  },[myParam])
console.log(product)
  return (
  <div>
    <Header/>
     <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
   <img src={product.img} alt="" />
   </div>
   <About/>
  </div>
  )
}
