import React, { useEffect, useState } from 'react';
import {Tost, TostWarn} from './Tost';

const Bookmark = ({bookMarkArray, timeSpent, tost, tostWarn}) => {
    // console.log(bookMarkArray);
    


    
    return (
        <div className='col-span-4 px-2 sticky top-0 h-screen'>
            <div className='border rounded-md bg-slate-100 text-2xl text-blue-700 font-semibold border-blue-700 p-5 mt-5'>Spent time on read : {timeSpent} min</div>
            <div className='p-5 mt-2 bg-slate-100 rounded-md'>
                <Tost tost={tost}></Tost> <TostWarn tost={tost} tostWarn={tostWarn}></TostWarn>
                <p className='font-bold text-2xl'>Bookmarked Blog : {bookMarkArray.length}</p>
                <div>
                    {bookMarkArray.map(singleBookMark =><p key={singleBookMark.id} className='bg-white my-2 p-5 rounded-md'>{singleBookMark.title}</p>)}
                    {/* <p className='bg-white my-2 p-5 rounded-md'>Master Microsoft Power Platform and Become an In-Demand!</p>
                    <p className='bg-white my-2 p-5 rounded-md'>Master Microsoft Power Platform and Become an In-Demand!</p>
                    <p className='bg-white my-2 p-5 rounded-md'>Master Microsoft Power Platform and Become an In-Demand!</p>
                    <p className='bg-white my-2 p-5 rounded-md'>Master Microsoft Power Platform and Become an In-Demand!</p> */}

                </div>
                
            </div>
            
        </div>
    );
};

export default Bookmark;