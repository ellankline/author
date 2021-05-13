import React, {useEffect, useState} from 'react';
import {Button} from 'reactstrap';
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';

const List = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/items')
            .then(res => setItems(res.data));
    }, [])

    const removeFromDom = itemId => {
        setItems(items.filter(item => item._id !== itemId))
    }

    //CHANGE RENDER AS NEEDED
    return (
        <div>
            {items.map((item, idx) => {
                return (
                    <p key={idx}>
                        <p>
                            {item.name}
                        </p>
                        <Button color="secondary">
                            <Link to={"/edit/" + item._id}>
                                Edit
                            </Link>
                        </Button>
                        
                        <DeleteButton 
                            itemId={item._id} 
                            successCallback={()=>removeFromDom(item._id)}
                        />
                    </p>
                )
            })}
        </div>
    )
}
export default List;