import React from 'react';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FaRegBookmark } from 'react-icons/fa';


const Tost = (props) => {
    //   let style = {props.tost};
    //   console.log(props.tost);
    return (
        <div style={props.tost} className='transition delay-150 duration-300'>
            <div className="py-2 px-3 text-right ">
                <span className="font-bold border rounded-full bg-white shadow-md shadow-amber-300 p-3">
                    Bookmark Added !
                </span>
            </div>
        </div>
    );
};

const TostWarn = (props) => {
    return (
        <div style={props.tostWarn} className='transition delay-150 duration-300'>
            <div className="py-2 px-3 text-right ">
                <span className="font-bold border rounded-full bg-red-600 text-white shadow-md shadow-amber-300 p-3">
                    Bookmark already exist !
                </span>
            </div>
        </div>
    );
};

export {Tost, TostWarn};