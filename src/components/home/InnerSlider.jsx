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
                    <Button key={trimItem} variant="light" style={{borderRadius:"5%", width: "200px", height:"350px", margin:"5px 5px 5px 5px", backgroundColor:"#f2f2f2" }}>
                      <Card  >
                    <Card.Img variant="top" src={trimItem.img} style={{ height: "150px"}} />
                    <Card.Body>
                  </Card.Body>
                  <div style={{margin:"3px 3px 3px 3px", overflow:"hidden", textOverflow:"ellipsis", fontSize:"15px", color:"black", height:"80px" }}>
                 {trimItem.title}
             </div>
             <div style={{fontSize:"35px", color:"black", height:"50px" }}>
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

