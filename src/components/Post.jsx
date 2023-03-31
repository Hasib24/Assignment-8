import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';

const Post = ({post, markAsReadHandler}) => {
    // console.log(post);
    let {id, author, authorPic, date, requiredTime, title, img, hashTag} = post;
    let [hashTag1, hashTag2] = hashTag;

    const markAsReadBtn = (id, title) =>{
        markAsReadHandler(id , title);
    }
    return (
        <div className='p-5'>
            <img className='rounded' src={img} alt="" />
            <div className='flex justify-between items-center py-5 px-2 my-5 border'>
                {/* header div of each post */}
                <div className='flex items-center'>
                    <img className='w-14 rounded-full mr-3' src={authorPic} alt="" />
                    <div>
                        <div className='font-bold' >{author}</div>
                        <div className='text-slate-500'>{date}</div>
                    </div>
                </div>
                {/* time required and bookmark  */}
                <div className='flex'>
                    <div className='text-slate-500 mr-4'>{requiredTime} min </div>
                    <button  onClick={()=>{markAsReadBtn(id, title)}}><FaRegBookmark/></button>
                </div>
            </div>
            <div>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <p className='my-5'>
                    <span className='px-3 py-1 hover:underline cursor-pointer mr-2 text-slate-500 bg-slate-50 border rounded-3xl'>#{hashTag1} </span>
                    <span className='px-3 py-1 hover:underline cursor-pointer mr-2 text-slate-500 bg-slate-50 border rounded-3xl'>#{hashTag2}</span>
                </p>
            </div>
            <button className='font-bold text-blue-500 underline' >Mark as read</button>
            
        </div>
    );
};

export default Post;