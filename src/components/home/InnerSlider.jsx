import React from "react";
import {Carousel, Stack, Card, Button} from "react-bootstrap";

const chunks = (slideItems, size) => slideItems==[]?[]: Array.from(
    new Array(Math.ceil(slideItems.length / size)),
    (_, i) => slideItems.slice(i * size, i * size + size)
);

export const InterSlider = ({slideItems}) => {
  return (
      <div style={{}} >
        <Carousel data-bs-theme="light" >
        {chunks(slideItems, 6).map((item) => (
          <Carousel.Item key={item._id} >
             <Stack
             key={item._id}
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={6}
              >
                {item.map(trimItem=>(
                    <Button key={trimItem} variant="light" style={{borderRadius:"5%", width: "200px", height:"250px", margin:"5px 5px 5px 5px", backgroundColor:"#f2f2f2" }}>
                      <Card  >
                    <Card.Img variant="top" src={trimItem.img} style={{ height: "100px"}} />
                    <Card.Body>
                  </Card.Body>
                  <div style={{overflow:"hidden", textOverflow:"ellipsis", fontSize:"14px", color:"black", height:"60px" }}>
                 {trimItem.title}
             </div>
             <div style={{fontSize:"20px", color:"black", height:"30px" }}>
                 {"$"+trimItem.price}
             </div>
                  </Card>
                    </Button>
                ))}
              </Stack>
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
  );
};

