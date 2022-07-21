import './App.css';
import Navbar from './components/Navbar';
import ShoppingCart from './components/ShoppingCart';
import {Routes,Route, Navigate} from "react-router-dom";
import Menu from './components/Menu';
import ErrorPage from './components/ErrorPage';
import { useEffect, useState } from 'react';
import ProductDetails from './components/ProductDetails';
import axios from 'axios'
import Admin from './components/Admin';
import Add from './components/AddProduct';

function App() {
  const [products,setProducts] = useState([])

  const [selectedProducts,setSelectedProducts]=useState([]);

  const handleProducts = (items) => {
    setSelectedProducts(items);
  }

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('http://localhost:3000/products');
      setProducts(data);
    }
    fetchData().catch(console.error)
  }, []);


  return (
    <>
      <Navbar />   
      <div className='container'>
        <Routes>
          <Route path='/menu' element={<Menu handleProducts={handleProducts} products={products}/>}  />
          <Route path='/admin' element={<Admin products={products}/>}  />
          <Route path='/cart' element={ <ShoppingCart products={selectedProducts}/>} />
          <Route path='/product/:id' element={ <ProductDetails products={products}/>} />
          <Route path='/add' element={ <Add />} />
          <Route path='/editProduct/:id' element={ <Add />} />
          <Route path='/' element={<Navigate  to='/menu'/>}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </div>
      
    </>
  );
}

export default App;
