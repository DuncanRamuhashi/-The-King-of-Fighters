import React from 'react'
import rugal from '../assets/42ecf987395365.5db729b1a1264.gif'

const MainPage = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-r from-gray-600 via-gray-900 to-black py-2 '>
      {/* Header */}
      <header className='flex w-full justify-between p-4 px-20'>
        <h1 className='text-gray-300 text-2xl font-extrabold'>The King of Fighters</h1>
        <nav>
          <ul className='flex space-x-4'>
           
            <li><a href='#' className='text-gray-300 font-extrabold hover:text-gray-600'>About</a></li>
          
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div className='flex px-20 justify-between py-2'>
        <div className='text-gray-300'>
          <h2 className='text-4xl mb-4'>Welcome to the King of Fighters Tournament</h2>
          <p className='text-lg '>Choose your fighter and prepare for the ultimate battle!</p>

          <div className='py-52 '> <button className='hover:text-gray-500'> 
             Start K.O.F
            </button></div>
        </div>
        <div className=' h-full'>
          <img src={rugal} alt='Rugal' className='h-[750px] w-[800px]' />
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-gray-800 p-4 mt-auto'>
        <div className='text-center text-gray-300'>
          <p>&copy; {new Date().getFullYear()} The King of Fighters. All rights reserved.</p>
          <p>Created with ❤️ by the KOF team.</p>
        </div>
      </footer>
    </div>
  )
}

export default MainPage
