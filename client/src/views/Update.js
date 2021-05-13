import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {} from 'reactstrap';
import Form from '../components/Form';
import { Link } from '@reach/router';

const Update = (props) => {
    const {id} = props;
    const [item, setItem] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/items/' + id)
            .then(res => {
                setItem(res.data);
                setLoaded(true)
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [id])

    const updateItem = (item) => {
        axios.put('http://localhost:8000/api/items/' + id, item)
            .then(res => console.log(res))
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
            <h1>Update an Author</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            {loaded && (
                <>
                    <Form
                        onSubmitProp={updateItem}
                        initialName={item.name}
                    />
                </>
            )}
        </div>
    )
}

export default Update;