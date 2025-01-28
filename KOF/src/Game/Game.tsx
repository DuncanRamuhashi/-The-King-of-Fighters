import React from 'react';
import stage from '../assets/Stages/stage8.gif';
import player1Face from '../assets/Characters/Kyo Kusanagi/face.png';
import player2Face from '../assets/Characters/Iori Yagami/face.png';
import player1stand from '../assets/Characters/Kyo Kusanagi/stand.gif';
import player2stand from '../assets/Characters/Iori Yagami/stand.gif';
const Game = () => {
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
              src={player1Face}
              alt="Player 1"
              className="h-32 w-32 rounded-full border-4 border-amber-500 shadow-lg"
            />
            <div className="mt-3 bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-2 rounded text-amber-300 font-semibold">
              Kyo
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
      <div className="flex items-center justify-center h-3/4">
    {/* Player one */}
    <div className=''>
        <img src={player1stand} className='h-[400px] '/>
    </div>


        <div className="text-amber-300 text-7xl font-extrabold animate-pulse tracking-widest drop-shadow-lg">
          Fight!
        </div>
           {/* Player one */}
  
    <div className=''>
        <img src={player2stand} className='h-[400px] '/>
    </div>
 
      </div>
    </div>
  );
};

export default Game;
