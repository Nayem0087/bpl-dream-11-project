import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Card = ({player}) => {
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <img className='max-h-48 w-full'
                    src={player.playerImg}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    <FaUser />
                    {player.playerName}</h2>
                <div className='flex justify-between items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <FaFlag />
                        <p>{player.playerCountry}</p>
                    </div>
                    <button className='btn '>{player.playerType}</button>
                </div>

                <div className="divider"></div>

                <h2 className='font-bold'>Rating : {player.rating}</h2>

                <div className='flex justify-between font-bold items-center'>
                    <p>{player.battingStyle}</p>
                    <p className='text-right'>{player.bowlingStyle}</p>
                </div>

                <div className="card-actions justify-between items-center">
                    <p className='font-semibold'>{player.price
                    }</p>
                    <button className="btn ">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Card;