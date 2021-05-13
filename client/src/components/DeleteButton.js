import React from 'react';
import axios from 'axios';
import {} from 'reactstrap';

const DeleteButton = (props) => {
    const {itemId, successCallback} = props;
    const deleteItem = e => {
        axios.delete('http://localhost:8000/api/items/' + itemId)
            .then(res => {successCallback();})
            .catch(err=>console.log(err));
    }

    return (
        <button onClick={deleteItem}>Delete</button>
    )
}

export default DeleteButton;