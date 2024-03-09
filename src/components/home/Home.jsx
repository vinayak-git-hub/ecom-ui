import React, { useState, useEffect } from 'react'
import { Banner } from './Banner';
import { QuickItems } from './QuickItems';
import { InterSlider } from './InnerSlider';
import { getProducts } from '../../api/Api';

 const Home = () => {
const [products, setProducts] = useState([])

useEffect(()=>{
  const productsFromApi = async () => {
    const allProducts = await getProducts()
    if(allProducts)setProducts(allProducts)
  }
productsFromApi()
},[])
  return (
    <div >
    <Banner bannerItems={products}/>
    <QuickItems quickItems={products}/>
    <InterSlider slideItems={products}/>
    </div>
  )
}

export default Home;