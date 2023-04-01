import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import Bookmark from './Bookmark';

const Main = () => {
    let [posts, setPosts] = useState([]);
    let [bookMarkArray, setBookMarkArray] = useState([]);
    let [timeSpent, setTimeSpent] = useState(0);
    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(posts => setPosts(posts))
    }, [])

    const bookMarkHandler = (id, title) =>{

        let newBookMarkArray = {id , title};

        // if(bookMarkArray.length === 0){
        //     setBookMarkArray([...bookMarkArray, newBookMarkArray]);
        // }
        // if(bookMarkArray.length > 0){
        //     console.log(bookMarkArray.length);
        //     for(const singleMark of bookMarkArray){
        //         console.log(singleMark.id);
        //         if(singleMark.id === id){
        //             console.log(`matched id`);
        //         }
        //         if(singleMark.id !== id){
        //             console.log(`id not matched and bookmark set`);
        //             setBookMarkArray([...bookMarkArray, newBookMarkArray])
        //         }
        //         console.log(bookMarkArray);
        //     }
        // }    
        
        let isArray = bookMarkArray.find(singleBookMark => singleBookMark.id === id)
        if(!isArray){
            setBookMarkArray([...bookMarkArray, newBookMarkArray])
        }
    }


    const markAsReadHandler = (time) =>{
        console.log(time);
        setTimeSpent(timeSpent + time)
    }


    
    // console.log(bookMark);

    return (
        <div className='md:grid md:grid-cols-12'>
            <Blog posts={posts} bookMarkHandler={bookMarkHandler} markAsReadHandler={markAsReadHandler}></Blog>
            <Bookmark bookMarkArray={bookMarkArray} timeSpent={timeSpent}></Bookmark>
        </div>
    );
};

export default Main;