import React from 'react';
import Post from './Post';

const Blog = ({posts, bookMarkHandler, markAsReadHandler}) => {
    // console.log(posts);
    return (
        <div className='col-span-8 border-r border-l'>
            {posts.map(post => <Post key={post.id} post={post} bookMarkHandler={bookMarkHandler} markAsReadHandler={markAsReadHandler}></Post>)}
        </div>
    );
};

export default Blog;