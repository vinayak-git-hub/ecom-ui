import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getProduct } from "../../api/Api";

export const Product = () => {
  const location = useLocation().pathname;
  const myParam = location.substring(1, location.length);
  const [product, setProduct] = useState({});
  const nav = useNavigate()

  const navError = () =>{
    return nav('/not-found')
  }

  useEffect(() => {
    const run = async () => {
      const prod = await getProduct(myParam);
      prod.error?navError():setProduct(prod)
    };
    run();
  });
  return (
    <div>
      <div
      >
        <img src={product.img} alt="" style={{ height: "250px", width:"250x", margin:"0px 0px 0px 100px", position:"relative" }} />
        <h4 >{product.title}</h4>
        <h6>{product.desc}</h6>
        <h2 style={{margin:"0px 0px 200px 0px"}}> $-{product.price}</h2>
      </div>
    </div>
  );
};
