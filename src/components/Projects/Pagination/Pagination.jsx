import { useState, useEffect } from "react";
import "./Pagination.css";
import Products from "./Products";
import { PAGE_SIZE } from "./Constant";
import PaginationCode from "./PaginationCode";
const Pagination = () => {
  const url = "https://dummyjson.com/products?limit=190";

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchProduct = async () => {
    const data = await fetch(url);
    const response = await data.json();
    setProducts(response.products);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // currentPage * PAGE_SIZE → "How many items should I skip before this page?"
  // start + PAGE_SIZE → "How many items should I take for this page?"
  // Math.ceil(totalProducts / PAGE_SIZE) → "How many pages do I need to show all the products,
  //  even if the last page isn't full?"

  const totalProduct = products.length;
  const totalPages = Math.ceil(totalProduct / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const handleClick = (ele) => {
    setCurrentPage(ele);
  };

  const handlePrevious = ()=>{
    setCurrentPage((prev)=>prev-1)
  }

    const handleNext = ()=>{
    setCurrentPage((prev)=>prev+1)
  }

  return (
    <div>
      <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
        Practice for Pagination
      </h4>
     <PaginationCode 
       currentPage  = {currentPage}
        handlePrevious = {handlePrevious}
        handleNext = {handleNext}
        totalPages = {totalPages}
        handleClick ={handleClick}
     />
      <div className="mains">
        {products.slice(start, end).map((ele) => {
          return (
            <div key={ele.id} className="mains">
              <Products productsName={ele} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Pagination;
