import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../App.css';

const ProductList = (props) => {
  const {removeFromDom} = props;

  const deleteProduct = (productId) => {
    axios.delete('http://localhost:8000/api/products/' + productId)
      .then(res => {
        removeFromDom(productId)
      })
      .catch(err => console.log(err));
  }


  return (
    <div>
        {props.products.map((product, i) => {
            return <p key = {i}>
                <Link to = {`/products/${product._id}`}>{product.title}</Link>
                <button className='left' onClick = {(e) => {deleteProduct(product._id)}}>Delete</button>
            </p>
        })}
    </div>
  )
}

export default ProductList;