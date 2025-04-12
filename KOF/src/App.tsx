import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

// Lazy-loaded components
const StartPage = lazy(() => import('./Components/MainPage'));
const AboutPage = lazy(() => import('./Components/AboutPage'));
const Game = lazy(() => import('./Game/Game'));
const Players = lazy(() => import('./Components/Players'));

// Fallback loading screen
const LoadingScreen = () => (
  <div className="flex justify-center items-center h-screen bg-black/50">
    <ClipLoader size={45} color="#4F46E5" />
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/online/:_id" element={<Game />} />
          <Route path="/choose" element={<Players />} />
          <Route path="*" element={<StartPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
