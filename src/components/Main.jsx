import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import Bookmark from './Bookmark';

const Main = () => {
    let [posts, setPosts] = useState([]);
    let [bookMarkArray, setBookMarkArray] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(posts => setPosts(posts))
    }, [])

    const markAsReadHandler = (id, title) =>{
        let newBookMarkArray = {id , title}
        setBookMarkArray([...bookMarkArray, newBookMarkArray])
        
    }
    // console.log(bookMark);

    return (
        <div className='grid grid-cols-12'>
            <Blog posts={posts} markAsReadHandler={markAsReadHandler}></Blog>
            <Bookmark bookMarkArray={bookMarkArray}></Bookmark>
        </div>
    );
};

export default Main;