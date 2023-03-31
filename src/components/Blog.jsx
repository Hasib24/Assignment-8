import React from 'react';
import Post from './Post';

const Blog = ({posts, markAsReadHandler}) => {
    // console.log(posts);
    return (
        <div className='col-span-8 border'>
            {posts.map(post => <Post key={post.id} post={post} markAsReadHandler={markAsReadHandler}></Post>)}
        </div>
    );
};

export default Blog;