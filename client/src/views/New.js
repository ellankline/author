import React, {useState} from 'react';
import axios from 'axios';
import {} from 'reactstrap';
import Form from '../components/Form';

const New = () => {
    const [items, setItems] = useState([]);
    const [errors, setErrors] = useState([]);

    const createItem = item => {
        axios.post('http://localhost:8000/api/items', item)
            .then(res=>{
                setItems([...items, res.data]);
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })            
    }
    //CHANGE RENDER AS NEEDED
    return (
        <div>
            <h1>Add an Author</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <Form
                    onSubmitProp={createItem}
                    initialName={""}
                />
        </div>
    )
}

export default New;