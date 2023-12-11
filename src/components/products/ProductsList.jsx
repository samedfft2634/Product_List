import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products, categories } from "../../helper/data";
import { Header } from "../header/Header";
import { useState,useEffect } from "react";

const ProductsList = () => {
  const [selectedBtn,setSelectedBtn]= useState("all")
  const [getProduct, setGetProduct] = useState(products)
 useEffect(() => {
  if(selectedBtn === "all"){
    setGetProduct(products)
  } else{
    const filteredProduct = products.filter(product=> product.category === selectedBtn)
    setGetProduct(filteredProduct)
  }
 }, [selectedBtn])
 

  return (
    <>
      <Header categories={categories} selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn}/>
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto"
      />
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center gap-3">
          {getProduct.map(product=>(
            <ProductCard {...product} key={product.id}/>
          ))}
        
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
