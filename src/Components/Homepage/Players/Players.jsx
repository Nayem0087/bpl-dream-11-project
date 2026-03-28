import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({playersPromise, setCoin, coin}) => {
    // console.log(playersPromise);
    const players = use (playersPromise)
    // console.log(players);
    const [SelectedType, setSelectedType] = useState('available');
    console.log(SelectedType, 'selectedType');
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className='sm:w-[90%] mx-auto my-16'>
            <div className='flex justify-between items-center gap-4 mb-6'>
                <div>
                    {SelectedType === 'available' ?
                        <h2 className='font-bold text-3xl'>Available Players</h2>
                        : (
                        <h2 className='font-bold text-3xl'>Selected Players ({selectedPlayers.length}/{players.length})</h2>  
                        )}
                </div>
                <div className=''>
                    <button 
                    onClick={() => setSelectedType('available')}
                    className={`btn ${SelectedType === 'available' ? 'bg-[#E7FE29]' : ""} rounded-r-none rounded-l-xl`}l>Available</button>
                    <button
                    onClick={() => setSelectedType('selected')} 
                    className={`btn ${SelectedType === 'selected' ? 'bg-[#E7FE29]' : ""} rounded-l-none rounded-r-xl`}>Selected({selectedPlayers.length})</button>
                </div>
            </div>

            {SelectedType === 'available' ? ( <AvailablePlayers 
            players={players} 
            setCoin={setCoin} 
            coin={coin} 
            setSelectedPlayers={setSelectedPlayers} 
            selectedPlayers={selectedPlayers}></AvailablePlayers> ) : (
            <SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>
            )}
        </div>
    
    )}
export default Players;