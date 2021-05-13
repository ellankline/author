import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {} from 'reactstrap';
import List from '../components/List';
import {Link} from '@reach/router';

const Main = () => {
    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/items')
            .then(res=>{
                console.log(res.data);
                setItems(res.data);
                setLoaded(true);
            })
    }, []);

    const removeFromDom = itemId => {
        setItems(items.filter(item => item._id !== itemId))
    }

    //CHANGE PROPS AS NEEDED
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/new">Add an author</Link>
            <p>We have quotes by:</p>
            {loaded && <List items={items} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;