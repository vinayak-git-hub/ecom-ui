import React from "react";
import {Carousel, Stack, Card} from "react-bootstrap";

const chunks = (slideItems, size) => slideItems==[]?[]: Array.from(
    new Array(Math.ceil(slideItems.length / size)),
    (_, i) => slideItems.slice(i * size, i * size + size)
);

export const InterSlider = ({slideItems}) => {
  return (
      <div style={{}} >
        <Carousel data-bs-theme="dark" >
        {chunks(slideItems, 6).map((item) => (
          <Carousel.Item key={item._id} >
             <Stack
             key={item._id}
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={6}
              >
                {item.map(trimItem=>(
                    <Card key={trimItem} style={{borderRadius:"5%", width: "200px", height:"300px", margin:"5px 5px 5px 5px", backgroundColor:"#f2f2f2" }}>
                    <Card.Img variant="top" src={trimItem.img} style={{ height: "200px"}} />
                    <Card.Body>
                  </Card.Body>
                  <div style={{margin:"3px 3px 3px 3px", overflow:"hidden", textOverflow:"ellipsis", fontSize:"20px", color:"black" }}>
                 {trimItem.title}
             </div>
                  </Card>
                ))}
              </Stack>
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
  );
};

