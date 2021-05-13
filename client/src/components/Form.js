import React, {useState} from 'react';
import {Button} from 'reactstrap';
//import axios from 'axios';
import {navigate, Link} from '@reach/router';

//CHANGE PROPS AS NEEDED
const Form = (props) => {
    const {initialName, onSubmitProp} = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
        navigate(`/`);
    };



    //CHANGE RENDER AS NEEDED
    return (
        <form>
            <p>
                <label>Name: </label>
                <input 
                    type="text"
                    name="item"
                    value={name}
                    onChange = {(e)=>setName(e.target.value)}/>
            </p>
            <Button color="primary"><Link to="/">Cancel</Link></Button>{''}
            <Button color="primary" onClick={onSubmitHandler}>Submit</Button>{''}
        </form>
    )
}

export default Form;