import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { ItemGrid } from './home/ItemGrid';
import { getProduct } from '../api/Api';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export const Product = () => {
    const location = useLocation();
  const myParam = new URLSearchParams(location.search).get('name');
console.log(myParam)
  const [product, setProduct] = useState([])

  useEffect(()=>{
    const run = async () => {
      const prod = await getProduct(myParam)
      if(prod){setProduct(prod)
        console.log( "*********")}
    }
    run()
  },[myParam])
console.log(product)
  return (
    <Container style={{ width: "320px", display:"grid", alignItems:"center", backgroundColor:"white", justifyContent:"center", marginTop:"5%"}}>
    {
             <Card key={product} style={{ width: "130px", height:"150px", margin:"5px 5px 5px 5px", backgroundColor:"#f2f2f0" }}>
             <Card.Img variant="top" src={product.img} style={{ height: "100px", width:""}} />
             <Card.Body>
           </Card.Body>
           <div style={{whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", fontSize:"10px"}}>
             {product.title}
             </div>
           </Card>
             
    }
    </Container>
  )
}
