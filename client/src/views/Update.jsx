import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import '../App.css';

const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
            navigate('/products')
    }

  return (
    <div className='singleproduct'>
        <h1>Update a Product</h1>
            <form onSubmit = {updateProduct}>
                <table className = "center">
                    <tbody>
                        <tr>
                            <td>
                                <label>Title:</label>
                            </td>
                            <td>
                                <input type = 'text' name = 'title' value = {title} onChange = { (e) => {setTitle(e.target.value)}} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Price:</label>
                            </td>
                            <td>
                                <input type = 'text' name = 'price' value = {price} onChange={(e) => {setPrice(e.target.value)}} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Description:</label>
                            </td>
                            <td>
                                <input type = 'text' name = 'description' value = {description} onChange={(e) => {setDescription(e.target.value)}} />
                            </td>
                        </tr>
                    </tbody>
                    </table><br></br>
                    <input type = 'submit' value = 'Edit'/>
            </form>
    </div>
  )
}

export default Update