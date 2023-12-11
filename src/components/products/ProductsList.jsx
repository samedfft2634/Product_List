import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products, categories } from "../../helper/data";
import { Header } from "../header/Header";
import { useState,useEffect } from "react";

const ProductsList = () => {
  const [selectedBtn,setSelectedBtn]= useState("all")
  const [getProduct, setGetProduct] = useState(products)
  const [searchTerm, setSearchTerm] = useState(""); /// GPT
  
  const handleChange = (e)=>{
    const value = e.target.value.toLowerCase()
    setSearchTerm(value)
   const filteredProducts = products.filter((product) =>
   selectedBtn === "all"
     ? product.title.toLowerCase().includes(value)
     : product.category === selectedBtn &&
       product.title.toLowerCase().includes(value)
 );
   setGetProduct(filteredProducts)
  }


  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      selectedBtn === "all"
        ? product.title.toLowerCase().includes(searchTerm)
        : product.category === selectedBtn &&
          product.title.toLowerCase().includes(searchTerm)
    );
    setGetProduct(filteredProducts);
  }, [selectedBtn]);

  return (
    <>
      <Header categories={categories} selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn}/>
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto"
        onChange={handleChange}
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
