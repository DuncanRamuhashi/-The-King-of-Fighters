import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './Components/MainPage';
import AboutPage from './Components/AboutPage';
import Game from './Game/Game';
import Players from './Components/Players';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <Router>     
      <Routes>     
        <Route path="/About" element={<AboutPage />} />
        <Route path="/online/:_id" element={<Game/>} />
        <Route path="/Choose" element={<Players/>}>
        </Route>
        <Route
          path="*"
          element={
            <>
             <section id="/">
              <StartPage />
            </section>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
