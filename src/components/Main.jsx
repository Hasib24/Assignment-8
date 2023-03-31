import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import Bookmark from './Bookmark';

const Main = () => {
    let [posts, setPosts] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(posts => setPosts(posts))
    }, [])
    return (
        <div className='grid grid-cols-12'>
            <Blog posts={posts}></Blog>
            <Bookmark></Bookmark>
        </div>
    );
};

export default Main;