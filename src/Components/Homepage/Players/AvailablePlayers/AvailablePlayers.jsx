import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import Card from '../../../Ui/Card';

const AvailablePlayers = ({ players, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
    // console.log(players);
    return (
        <div className='mb-80'>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12'>
                {
                    players.map((player, ind) => {
                        // console.log(player);
                        return <Card key={ind} player={player} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} ></Card>
                    })
                }
            </div>

        </div>
    );
};

export default AvailablePlayers;