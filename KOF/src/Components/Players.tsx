import React, { useEffect, useState } from 'react';
import clark from '../assets/Characters/Clark Still/face.png';
import { Link } from 'react-router-dom';

interface Player {
  _id: string;
  name: string;
  description: string;
  face: string;
  punch: string;
  kick: string;
  stand: string;
}

const Players = () => {
  const [players, setPlayers] = useState<Player[]>([]); // Corrected type for multiple players
  const [selectedPlayer, setSelectedPlayer] = useState<Player | undefined>(undefined); // Allow undefined for initial state


  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/players/');
        if (!res.ok) {
          throw new Error("Failed to fetch players");
        }
        const data = await res.json();
        console.log(data.data);
        setPlayers(data.data);
      } catch (error) {
        console.error('Error fetching players', error);
      }
    };
    fetchPlayers();
  }, []);

  const handleMouseEnter = (player: Player) => {
    setSelectedPlayer(player);
  };


  return (
    <div className="h-full w-full bg-gradient-to-r from-gray-800 to-black flex flex-col items-center px-6 sm:px-10 py-10">
    
      <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-200 mb-8">
        Choose a Player
      </h1>
          <Link
           to={`/online/${selectedPlayer?._id}`}
            className="inline-block w-full text-center px-20 bg-red-600 text-white font-bold py-3 p- rounded-lg hover:bg-red-400 transition duration-300"
          >
            Start 
          </Link>
      {/* Container */}
      <div className="flex flex-col sm:flex-row border-4 border-gray-600 w-full p-5 rounded-lg bg-gray-900 shadow-lg space-y-8 sm:space-y-0 sm:space-x-8">
        {/* Players Grid */}
        <div className="grid grid-cols-4 gap-5">
          {players.map((player) => (
            <img
              key={player._id}
              src={`data:image/gif;base64,${player.face}`} // Ensure player.face contains base64 image data or use an actual URL
              alt={player.name}
              className="h-[150px] w-52 rounded-2xl border-4 border-gray-600 shadow-md hover:scale-150 transition-transform duration-300"
              onMouseEnter={() => handleMouseEnter(player)} // Select player on hover
          
            />
          ))}
        </div>

        {/* Character Details */}
        <div className="flex flex-col items-center sm:items-start flex-grow space-y-6">
          {selectedPlayer ? (
            <>
              {/* Character Image */}
              <div className="w-full rounded-lg overflow-hidden border-4 border-gray-600 shadow-lg">
                <img
                  src={`data:image/gif;base64,${selectedPlayer.face}`} // Same here, ensure it's base64 or URL
                  alt={selectedPlayer.name}
                  className="w-full h-[300px] object-cover"
                />
              </div>

              {/* Character Bio */}
              <div className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-prose">
                <h2 className="text-lg font-bold">{selectedPlayer.name}</h2>
                <p>              
                    {selectedPlayer.description.substring(0, 400)}
                </p>
              </div>
            </>
          ) : (
            <div className="text-gray-400 text-center">Select a player to see details.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Players;
