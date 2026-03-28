import React from 'react';
import bannerImg from '../../../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='min-h-[60vh] sm:w-[90%] mx-auto'>
            <img src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;