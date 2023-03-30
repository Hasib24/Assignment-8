import React from 'react';
import proPic from './../img/Ellipse 1.png'

const Header = () => {
    return (
        <div className='bg-slate-800'>
            <div className='container flex justify-between bg-slate-500 mx-auto px-6 h-16 items-center'>
                <h1 className='text-3xl'>Knowledge Cafe</h1>
                <div className='flex items-center'>
                    <div>
                        <a className='mr-5' href="/abc">Sign In</a>
                        <a className='mr-5' href="/abc">Blog</a>
                    </div>
                    <img className='w-12' src={proPic} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Header;