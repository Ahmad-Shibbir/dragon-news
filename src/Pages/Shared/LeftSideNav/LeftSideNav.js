import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [category, setCategory] = useState([])

    useEffect(() =>{
            fetch('http://localhost:5000/news-category')
            .then(res => res.json())
            .then(data => setCategory(data) )
    },[])

    return (
        <div>
            <h2>Left Side {category.length}</h2>
            {
                category.map(ct => <p key = {ct.id} >
                <Link to = {`/category/${ct.id}`}> {ct.name}</Link>
                
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;