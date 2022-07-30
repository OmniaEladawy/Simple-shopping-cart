import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Menu(props) {
      const [prods,setProds] = useState([])
      
      const [cart,setCart] = useState([]);

      
      const isFound = (product) => cart.some(element => {
        if (element.id === product.id) {
          return true;
        }
      
        return false;
      });
      
      const addToCart = (product) =>{
        product.isAdded = true
        
       
        const exist = isFound(product);
        
        if(!exist){
          product.count = 1 
          setCart([...cart,product]); 
        }else{
          product.count += 1;
        } 
      }

      useEffect(()=>{
        props.handleProducts(cart);
      },[cart,props]);

      useEffect(()=>{
        setProds(props.products);
      });
    
    return ( 
        <>
            <h1 className="text-center m-5"> Menu </h1>
            <table className='table text-center'>
                  <thead>
                      <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Price</th>
                          <th scope="col">Add to cart</th>
                      </tr>
                  </thead>
                  <tbody>
                    {prods.map(product => {
                      return (
                        <tr key={product.id}>
                          <td><Link to={`/product/${product.id}`}> {product.name} </Link></td>
                          <td>{product.price}</td>
                          <td>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus-fill bag" viewBox="0 0 16 16" style={{color:'rgb(137 137 137)',cursor:'pointer'}} onClick={()=>addToCart(product)}>
                              <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
                            </svg> 
                            </td>
                        </tr>
                      )
                    })}
                  </tbody>
            </table>
        </>
     );
}

export default Menu;