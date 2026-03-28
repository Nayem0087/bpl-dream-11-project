import React from 'react';
import Players from '../Players';
import { MdDelete } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, setCoin, coin}) => {
    console.log(selectedPlayers, 'selectedPlayers');

    const handleDeleteSelectedPlayer = (player) => {
        console.log(selectedPlayers, 'selectedPlayers');
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName)
        console.log(filteredPlayers, 'filteredPlayers');
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price)
    }

    return (
        <div>
            {selectedPlayers.length === 0 ?
            <div className='h-[400px] flex items-center justify-center flex-col gap-4'>
                <h2 className='font-semibold text-xl'>No players selected yet</h2>
                <p>Go to Available tab to select players</p>
            </div>
            : selectedPlayers.map((player, ind) => {
                return (
                    <div key={ind} className='flex items-center gap-6 justify-between p-10 rounded-2xl border mb-5'>
                        <div className='flex items-center gap-6'>
                            <img src={player.playerImg} alt={player.playerName} className='h-[75px] w-auto rounded-md' />
                           <div>
                             <h2 className='flex items-center gap-2 font-semibold text-xl'><FaUser></FaUser>{player.playerName}</h2>
                            <p>{player.playerType}</p>
                           </div>
                        </div>
        
                        <button className='btn text-red-500' onClick={() => handleDeleteSelectedPlayer(player)}>
                            <MdDelete></MdDelete>
                        </button>
                    </div>
                )
            })}
        </div>
    );
};

export default SelectedPlayers;