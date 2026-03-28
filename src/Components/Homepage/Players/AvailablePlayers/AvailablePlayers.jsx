import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import Card from '../../../Ui/Card';

const AvailablePlayers = ({ players }) => {
    // console.log(players);
    return (
        <div className='mb-80'>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12'>
                {
                    players.map((player) => {
                        // console.log(player);
                        return <Card player={player}></Card>
                    })
                }
            </div>

        </div>
    );
};

export default AvailablePlayers;