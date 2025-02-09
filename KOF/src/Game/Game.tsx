import React, { useEffect, useState,useRef  } from 'react';
import stage from '../assets/Stages/stage3.gif';

import player2Face from '../assets/Characters/Iori Yagami/face.png';
import player2stand from '../assets/Characters/Iori Yagami/stand.gif';
import { useParams } from 'react-router-dom';
interface Player {
  _id: string;
  name: string;
  description: string;
  face: string;
  punch: string;
  kick: string;
  stand: string;
}

const Game = () => {


  const [position,setPosition] = useState(0);  // player one only
  const step = 20; // player one only
  const [playerState,setPlayerState] = useState<Player | undefined>(undefined);

const { _id } = useParams<{ _id: string }>(); 
console.log(_id);
const [players, setPlayers] = useState<Player[]>([]); // Corrected type for multiple players
 const [villain, setVillain] = useState<Player | undefined>(undefined); // Allow undefined for initial state
   
   
 useEffect(() => {
  const fetchPlayers = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/players/");
      if (!res.ok) {
        throw new Error("Failed to fetch players");
      }
      const data = await res.json();
      console.log(data.data);
  
      setPlayers(data.data);

      // Find player by _id
      const player = data.data.find((p: Player) => p._id === _id);
      if (player) {
        setPlayerState(player);
      }
    } catch (error) {
      console.error("Error fetching players", error);
    }
  };

  fetchPlayers();
}, []);
   

  useEffect(() => {
     
    const handleKey = (event : KeyboardEvent) => {
      //movements 
      if(event.key === "ArrowLeft"){
         setPosition((prevX) => prevX - step);
      } else if (event.key === "ArrowRight"){
        setPosition((prevX) => prevX + step);
      }
          
    };
   
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown",handleKey);
  },[]);
  //fighting
  useEffect(() => {
  const handleAttack = (event: KeyboardEvent) => {
    setPlayerState((prev) => {
      if (!prev) return prev;

      if (event.key === "A" || event.key === "a") {
        return { ...prev, stand: prev.punch };
      } else if (event.key === "S" || event.key === "s") {
        return { ...prev, stand: prev.kick };
      } else {
        return { ...prev, stand: prev.stand };
      }
    });
  };

  window.addEventListener("keydown", handleAttack);
  return () => window.removeEventListener("keydown", handleAttack);
}, []);


  return (
    <div
      className="h-screen w-full bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${stage})` }}
    >
      {/* Top Section - Player Stats */}
      <div className="flex justify-between items-center px-8 pt-8">
        {/* Player 1 Stats */}
        <div className="flex items-center space-x-6">
          {/* Player 1 Face */}
          <div className="flex flex-col items-center">
            <img
              src={`data:image/gif;base64,${playerState?.face}`} 
              alt="Player 1"
              className="h-32 w-32 rounded-full border-4 border-amber-500 shadow-lg transform scale-x-[-1]"
            />
            <div className="mt-3 bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-2 rounded text-amber-300 font-semibold">
              {playerState?.name}
            </div>
          </div>
          {/* Progress Bar */}
          <div className="w-92 h-6 bg-gray-800 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
              style={{ width: '70%' }}
            ></div>
          </div>
        </div>

        {/* Middle Icon */}
        <div className="text-amber-200 py-6">
          <span className="text-6xl font-extrabold drop-shadow-md">VS</span>
        </div>

        {/* Player 2 Stats */}
        <div className="flex items-center space-x-6">
          {/* Progress Bar */}
          <div className="w-92 h-6 bg-gray-800 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
              style={{ width: '60%' }}
            ></div>
          </div>
          {/* Player 2 Face */}
          <div className="flex flex-col items-center">
            <img
              src={player2Face}
              alt="Player 2"
              className="h-32 w-32 rounded-full border-4 border-amber-500 shadow-lg"
            />
            <div className="mt-3 bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-2 rounded text-amber-300 font-semibold">
              Iori
            </div>
          </div>
        </div>
      </div>

      {/* Fight Section */}
      <div className="flex items-center justify-center h-3/4 ">
    {/* Player one */}
    <div className='h-[400px] w-[270px]' style={{transform: `translatex(${position}px)`}}>
      
        <img src={`data:image/gif;base64,${playerState?.stand}`}  className='h-[400px] w-[270px] transform scale-x-[-1] object-cover'/>
    </div>


        <div className="text-amber-300 text-7xl font-extrabold animate-pulse tracking-widest drop-shadow-lg">
          Fight!
        </div>
           {/* Player Two */}
  
    <div className='h-[400px] w-[270px]' >
        <img src={player2stand} className='h-[400px] w-[270px] '/>
    </div>
 
      </div>
    </div>
  );
};

export default Game;
