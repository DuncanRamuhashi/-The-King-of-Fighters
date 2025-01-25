import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './Components/MainPage';
import AboutPage from './Components/AboutPage';

function App() {
  return (
    <Router>
      
      <Routes>
        
        <Route path="/About" element={<AboutPage />} />

     
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
