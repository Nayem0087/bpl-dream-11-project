import React from 'react';
import Players from '../Players';
import { MdDelete } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

const SelectedPlayers = ({selectedPlayers}) => {
    console.log(selectedPlayers, 'selectedPlayers');
    return (
        <div>
            {selectedPlayers.map((player, ind) => {
                return (
                    <div key={ind} className='flex items-center gap-6 justify-between p-10 rounded-2xl border mb-5'>
                        <div className='flex items-center gap-6'>
                            <img src={player.playerImg} alt={player.playerName} className='h-[170px] w-auto rounded-md' />
                           <div>
                             <h2 className='flex items-center gap-2 font-semibold text-2xl'><FaUser></FaUser>{player.playerName}</h2>
                            <p>{player.playerType}</p>
                           </div>
                        </div>
        
                        <button>
                            <MdDelete></MdDelete>
                        </button>
                    </div>
                )
            })}
        </div>
    );
};

export default SelectedPlayers;