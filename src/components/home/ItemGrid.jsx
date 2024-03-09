import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../assets/download.jpeg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export const ItemGrid = ({items}) => {

  const navigate = useNavigate() 

  const chunks = (size) => Array.from(
    new Array(Math.ceil(items.length / size)),
    (_, i) => items.slice(i * size, i * size + size)
);

 const viewItem = (rawId) =>{
 const id = "/"+rawId; 
 console.log(id)
  navigate(id)
 }

  return (
    
    <Container style={{ width: "320px", display:"grid", alignItems:"center", backgroundColor:"white", justifyContent:"center", margin:"5px 5px 5px 5px"}} >
    {
        chunks(2).map(contx=>(
            <Row key={contx} s>
           {contx.map(inst=>(
            <Button key={inst} style={{ width: "150px",  backgroundColor:"white" }} variant="light"
            onClick={() => viewItem(inst._id)}>
             <Card >
             <Card.Img variant="top" src={inst.img} style={{ height: "120px"}} />
             <Card.Body>
           </Card.Body>
             <div style={{whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", fontSize:"10px", height:"30px"}}>
             {inst.title}
             </div>
           </Card>
           </Button>
           ))}
             
            </Row>
        ))
    }
    </Container>
  );
};
