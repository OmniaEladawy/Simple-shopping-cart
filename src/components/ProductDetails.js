import { useParams } from "react-router-dom";

function ProductDetails(props) {
    let params = useParams();
    
    let currentProductId = parseInt(params.id);
    
    const allProducts = props.products;
    console.log(allProducts)
    const currentProduct = allProducts.filter(product => product.id === currentProductId)
    console.log(currentProduct)
    return (
        <div className="card m-5 text-center">
            <h3 className="card-header">Product details num : {currentProductId}</h3> 
            <div className="card-body">
                <h5 className="text-danger">Product Name : <span style={{fontWeight:'normal',color:'#000'}}>{currentProduct[0].name}</span> </h5>
                <hr/>
                <h5 className="text-danger">Product Price : <span style={{fontWeight:'normal',color:'#000'}}>{currentProduct[0].price}</span></h5>
            </div>
        </div>
        );
}

export default ProductDetails;