import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

export const Banner = ({bannerItems}) => {

  const viewProduct = useNavigate()

  const onClickHandler=(id)=>{
    console.log(id)
  }

  return (
      <div style={{}} >
        <Carousel data-bs-theme="dark"  style={{height:"250px"}}>
        {bannerItems.map((item) => (
          <Carousel.Item key={item._id} >
            <img
              className="d-block "
              src={item.img}
              alt="First slide"
              style={{height:"280px", marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}
            />
            <Carousel.Caption style={{color:"grey"}}>
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
  );
};
