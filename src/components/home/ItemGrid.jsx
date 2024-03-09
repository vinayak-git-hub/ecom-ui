import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../assets/download.jpeg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const ItemGrid = ({items}) => {

  const chunks = (size) => Array.from(
    new Array(Math.ceil(items.length / size)),
    (_, i) => items.slice(i * size, i * size + size)
);
  return (
    
    <Container style={{ width: "320px", display:"grid", alignItems:"center", backgroundColor:"white", justifyContent:"center", marginTop:"5%"}}>
    {
        chunks(2).map(contx=>(
            <Row key={contx}>
           {contx.map(inst=>(
             <Card key={inst} style={{ width: "130px", height:"150px", margin:"5px 5px 5px 5px", backgroundColor:"#f2f2f0" }}>
             <Card.Img variant="top" src={inst.img} style={{ height: "100px", width:""}} />
             <Card.Body>
           </Card.Body>
           <div style={{whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", fontSize:"10px"}}>
             {inst.title}
             </div>
           </Card>
           ))}
             
            </Row>
        ))
    }
    </Container>
  );
};
