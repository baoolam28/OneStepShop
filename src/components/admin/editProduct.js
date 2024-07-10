import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import productApi from '../../api/productApi';

function EditProduct() {
    const {productId} = useParams();
    const {product, setProduct} = useState({
        ID:'',
        Category:'',
        ProductName:'',
        Price:'',
        image:'',
        link:''
    });

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await productApi.get(productId);
      
            setProduct(data);
            console.log(product);
        }
        fetchProduct();
    },[]);
  return (
    <div>
      
    </div>
  )
}

export default EditProduct;
