import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import '../App.css';
import {Link, useNavigate} from 'react-router-dom';

const ProductDetail = (props) => {
    const {removeFromDom} = props;
    const [product, setProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, []);

    const deleteProduct = (productId) => {
      axios.delete('http://localhost:8000/api/products/' + productId)
        .then(res => {
          removeFromDom(productId)
        })
        .catch(err => console.log(err));
        navigate('/products')
    }


  return (
    <div className='singleproduct'>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <Link to = {"/" + product._id + "/edit"}>
          Edit
        </Link>
        <button className='left' onClick = {(e) => {deleteProduct(product._id)}}>Delete</button>
    </div>
  )
}

export default ProductDetail;