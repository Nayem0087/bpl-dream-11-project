import React from 'react';
import bannerImg from '../../../../assets/Frame 8.png'

const Banner = () => {
    return (
        <div className=' sm:w-[90%] mx-auto'>
            <img src={bannerImg} alt="" />
        </div>
        
    );
};

export default Banner;