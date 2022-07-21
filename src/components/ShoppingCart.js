import { useState } from 'react';
import { useEffect } from 'react';
function ShoppingCat(props) {
    const [items,setItems] = useState([]);
    useEffect(()=>{
        setItems(props.products);
    },[props])
    const inctreaseItem = (item) => {
        item.count += 1;
        setItems([...items]);
    } 
    const decreaseItem = (item) => {
        item.count -= 1;
        if(item.count === 0){
            const filteredItems = items.filter(i => i.id !== item.id);
            setItems(filteredItems);
        }else{
            setItems([...items]);
        } 
    } 
    return (
        <>
        <h1 className="text-center m-5"> Shopping Cart </h1>
        <button className='btn btn-danger fw-bold d-block m-auto' onClick={()=>{setItems([])}}>Reset</button>
        {items.map((item,index)=>{
          return(
            <div key={index} className="card m-5 text-center">
                <h4 className="card-header">{item.name}</h4>
                <div className='card-body'>
                    <h6 className='fw-bold'>Count : {item.count}</h6>
                    <button className='btn btn-primary m-2 fw-bold' onClick={()=>{inctreaseItem(item)}}>+</button>
                    <button className='btn btn-danger' onClick={()=>{decreaseItem(item)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                                        </svg></button>
                </div>
            </div>
          ) 
        })}
        </> 
    );
}

export default ShoppingCat;


