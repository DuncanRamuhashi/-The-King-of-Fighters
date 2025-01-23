import React from 'react';
import rugal from '../assets/42ecf987395365.5db729b1a1264.gif';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
const MainPage = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-r from-gray-600 via-gray-900 to-black'>
      {/* Header */}
      <header className='flex w-full justify-between items-center p-6 px-12'>
        <h1 className='text-gray-300 text-3xl font-extrabold tracking-wide'>The King of Fighters</h1>
        <nav>
          <ul className='flex space-x-6'>
            <li>
              <NavLink
                to='/About'
                className='text-gray-300 font-semibold hover:text-gray-500 transition-colors duration-200'
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div className='flex flex-col lg:flex-row justify-between items-center px-12  '>
        {/* Text Section */}
        <div className='text-gray-300 lg:w-1/2 space-y-6'>
          <h2 className='text-5xl font-bold leading-tight'>
            Welcome to the King of Fighters Tournament
          </h2>
          <p className='text-lg'>
            Choose your fighter and prepare for the ultimate battle!
          </p>
          <a
            href='#'
            className='inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-500 transition duration-300'
          >
            Start K.O.F
          </a>
        </div>

        {/* Image Section */}
        <div className='mt-12 lg:mt-0 lg:w-1/2 flex justify-center'>
          <img
            src={rugal}
            alt='Rugal'
            className='h-auto w-auto object-cover rounded-lg shadow-lg'
          />
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-gray-800 p-3'>
        <div className='text-center text-gray-400 space-y-2'>
          <p>&copy; {new Date().getFullYear()} The King of Fighters. All rights reserved.</p>
          <p>Created with ❤️ by the KOF team.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
