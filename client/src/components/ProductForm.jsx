import React, {useState} from "react";
import axios from 'axios';

export default props => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => console.log("Response: ", res))
            .catch(err => console.log("Response: ", err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit = {onSubmitHandler}>
                <table className = "center">
                    <tbody>
                        <tr>
                            <td>
                                <label>Title:</label>
                            </td>
                            <td>
                                <input type = 'text' onChange={e => setTitle(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Price:</label>
                            </td>
                            <td>
                                <input type = 'text' onChange={e => setPrice(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Description:</label>
                            </td>
                            <td>
                                <input type = 'text' onChange={e => setDescription(e.target.value)} />
                            </td>
                        </tr>
                    </tbody>
                    </table><br></br>
                    <input type = 'submit' value = 'Create'/>
            </form>
        </div>
    )
}