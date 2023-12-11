import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import "./Header.scss";


export const Header = ({categories,selectedBtn, setSelectedBtn}) => {
  return (
    <Container className="header">
      <h1>Products List</h1>
      <Stack
        direction="vertical"
        gap={3}
        className="btns justify-content-center flex-md-row"
      >
          {categories.map(item=> (
             <Button variant="secondary" className={selectedBtn === item ? "active" : ""} key={item} onClick={()=>setSelectedBtn(item)}> 
             {item.toUpperCase()}
             </Button>
          ) )}
       
      </Stack>
    </Container>
  );
};
