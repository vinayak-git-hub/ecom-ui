import React from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

export const Banner = ({ bannerItems }) => {
  const navigate = useNavigate();

  const viewItem = (rawId) => {
    const id = "/" + rawId;
    console.log(id);
    navigate(id);
  };

  return (
    <div style={{}}>
      <Carousel data-bs-theme="dark" style={{ height: "250px" }}>
        {bannerItems.map((item) => (
          <Carousel.Item key={item._id}>
            <Button
              variant="light"
              style={{ height: "250px", width: "100%", margin:"2px 2px 2px 2px", backgroundColor:"white"}}
              onClick={() => viewItem(item._id)}
            >
            <img
              className="d-block "
              src={item.img}
              alt="First slide"
              style={{
                height: "280px",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            />
            <Carousel.Caption style={{ color: "grey" }}>
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </Carousel.Caption>

            </Button>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
