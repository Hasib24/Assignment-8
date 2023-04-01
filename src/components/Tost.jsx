import React from 'react';
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

export default Tost;