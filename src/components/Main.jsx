import React from 'react';
import Blog from './Blog';
import Bookmark from './Bookmark';

const Main = () => {
    return (
        <div className='grid grid-cols-12'>
            <Blog></Blog>
            <Bookmark></Bookmark>
        </div>
    );
};

export default Main;