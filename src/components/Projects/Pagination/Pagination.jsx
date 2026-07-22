import {useState,useEffect} from 'react'
import "./Pagination.css";
import Products from './Products'
const Pagination = ()=>{
    const url = 'https://dummyjson.com/products?limit=190'
    const [products,setProducts] = useState([])
    const fetchProduct = async ()=>{
        const data = await fetch(url)
        const response = await data.json()
        setProducts(response.products)
    }
    console.log(products)
    useEffect(()=>{
        fetchProduct();
    },[])
    return(
        <div>
            <h4 style={{textAlign:'center'}}>Practice for Pagination</h4>
             <div className='mains'>
         {products.map((ele)=>{
            return(
                <div key={ele.id} className='mains'>
                    <Products productsName={ele}/>
                </div>
            )
         })}
        </div>
        </div>
    )
}
export default Pagination;