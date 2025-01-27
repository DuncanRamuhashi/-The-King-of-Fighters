import React, { useRef, useState } from "react";
import rugal from "../assets/42ecf987395365.5db729b1a1264.gif";
import { NavLink,useNavigate } from "react-router-dom"; 
import soundFile from "../assets/Futuristic HUDUI Visuals Sound Design.mp3";

const MainPage = () => {
  const audioRef = useRef(new Audio(soundFile)); // Create a ref to access the audio element
  const [isLoading, setIsLoading] = useState(false); // State to control the loading bar
  const [progress, setProgress] = useState(0); // State for progress bar percentage
  const useNav =   useNavigate();
  const handleButtonClick = () => {
    const audio = audioRef.current;
    if (audio) {
      setIsLoading(true); // Start loading
      audio.play(); // Play the audio
      let progressValue = 0;

      // Update progress over 17 seconds
      const progressInterval = setInterval(() => {
        progressValue += 100 / 17; // Increment progress (100% divided by 17 seconds)
        setProgress(progressValue);
      }, 1000);

      // Stop after 17 seconds
      setTimeout(() => {
        setIsLoading(false); // Hide the loading bar
        setProgress(0); // Reset progress
        clearInterval(progressInterval); // Clear the interval
        audio.pause(); // Pause the audio
        audio.currentTime = 0; // Reset the audio to the beginning
        if(progress === 0){
          useNav('/Choose');
         }
        
      }, 17000); // 17 seconds

    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-600 via-gray-900 to-black">
      {/* Header */}
      <header className="flex w-full justify-between items-center p-6 px-12">
        <h1 className="text-gray-300 text-3xl font-extrabold tracking-wide">The King of Fighters</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/About"
                className="text-gray-300 font-semibold hover:text-gray-500 transition-colors duration-200"
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-12 ">
        {/* Text Section */}
        <div className="text-gray-300 lg:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold leading-tight">Welcome to the King of Fighters Tournament</h2>
          <p className="text-lg">Choose your fighter and prepare for the ultimate battle!</p>
          <button
            onClick={handleButtonClick}
            className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-500 transition duration-300"
          >
            Start K.O.F
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
          <img
            src={rugal}
            alt="Rugal"
            className="h-[800px] w-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Loading Bar */}
      {isLoading && (
        <div className="fixed bottom-0 left-0 w-full h-7 bg-gray-800">
          <div
            className="bg-gradient-to-r from-red-500 h-full via-yellow-500 to-red-500 animate-pulse"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-600 via-gray-900 flex justify-center to-black p-3 h-full py-">
        <div className="text-center text-gray-400 space-y-2">
          <p>&copy; {new Date().getFullYear()} The King of Fighters. All rights reserved.</p>
          <p>Created with ❤️ by Duncan Ramuhashi.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
