import React from 'react';
import proPic from './../img/Ellipse 1.png'

const Header = () => {
    return (
        <div className=''>
            <div className='container md:flex justify-between border-b mx-auto  py-8 items-center'>
                <h1 className='text-3xl font-bold text-center'>Knowledge Cafe</h1>
                <div className='flex items-center justify-center'>
                    <div>
                        <a className='m-5' href="/abc">Sign In</a>
                        <a className='m-5' href="/abc">Blog</a>
                        <a className='m-5 md:hidden visible' href="/abc">Profile</a>
                    </div>
                    <img className='w-12 cursor-pointer invisible md:visible' src={proPic} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Header;