import React from 'react';
import dollerImg from '../../../assets/coin-icons.png';
import logoImg from '../../../assets/logo.png'

const Navbar = ({ coin }) => {
    return (

        <div className="navbar bg-base-100 shadow-sm sm:w-[90%] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                </div>
                <div className="flex-1">
                    <img src={logoImg} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                </ul>
            </div>
            <div className='flex-none lg:ml-30'>
                <button className='flex justify-between items-center gap-2 font-bold text-xl'>
                    {coin} Coins
                    <img src={dollerImg} alt="" />
                </button>
            </div>
        </div>

    );
};

export default Navbar;




<div className="navbar bg-base-100 shadow-sm sm:w-[90%] mx-auto">
    <div className="flex-1">
        <img src={logoImg} alt="" />
    </div>

    <ul className='flex flex-2 justify-between'>
        <li>Home</li>
        <li>Fixture</li>
        <li>Teams</li>
        <li>Schedules</li>
    </ul>

    <div className='flex-none'>
        <button className='flex justify-between items-center gap-2 font-bold text-xl'>
            {/* {coin} Coins */}
            <img src={dollerImg} alt="" />
        </button>
    </div>
</div>