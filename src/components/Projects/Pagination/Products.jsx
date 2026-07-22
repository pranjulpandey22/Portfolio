import "./Pagination.css";
const Products = ({productsName})=>{
    const { title, brand,category ,images} = productsName;
    return(
        <div className="cardProduct">
       <img className='imgPrro' src={images[0]} alt="Product" />
         <span>{brand}</span>
         <p><strong>{title}</strong></p>
          <p><strong>{category}</strong></p>
        </div>
    )
}
export default Products;