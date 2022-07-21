import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
function Add() {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const navigate = useNavigate();
    let params = useParams();

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(params.id){
            console.log(name,price)
            const obj = {name,price,count: 0, isAdded: false}
            await axios.put(`http://localhost:3000/products/${params.id}`,obj);
            console.log("edit");  
        }else{
            const obj = {name,price,count: 0, isAdded: false}
            await axios.post('http://localhost:3000/products',obj);
            console.log("submit");
            
        } 
        navigate('/admin')   
    }

    useEffect(()=>{
        if(params.id){
            const editForm = async () => {
                const {data} = await axios.get(`http://localhost:3000/products/${params.id}`);
                setName(data.name);
                setPrice(data.price);
            }
            editForm();
        }
    },[])

    return ( 
        <div className="container">
            <h1 className="m-3 text-center">{params.id ? "Edit Product" : "Add Product"}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Name</label>
                    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Price</label>
                    <input value={price} onChange={(e)=>setPrice(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">{params.id ? "Edit" : "Add"}</button>
            </form>
        </div>
    );
}

export default Add;