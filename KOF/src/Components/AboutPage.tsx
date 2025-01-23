import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); 
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-8">
      <button 
        onClick={handleBackClick} 
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-6"
      >
        ← Back to Landing Page
      </button>

      <h1 className="text-4xl font-extrabold text-center mb-8">The King of Fighters</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-2">Introduction</h2>
          <p>
            *The King of Fighters* is a classic fighting game developed by SNK. It features a roster of unique characters, each with their own special moves and fighting styles. The game takes place across various stages, each with its own distinct environment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Game Overview</h2>
          <p>
            The objective of *The King of Fighters* is to defeat your opponents in one-on-one combat. Players can choose from a wide variety of characters and battle through different stages to become the ultimate fighter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Installation</h2>
          <ol className="list-decimal pl-8">
            <li>Clone the repository:
              <code className="bg-gray-800 px-2 py-1 rounded block my-1">git clone https://github.com/your-repository/kof-react-app.git</code>
            </li>
            <li>Navigate to the project directory:
              <code className="bg-gray-800 px-2 py-1 rounded block my-1">cd kof-react-app</code>
            </li>
            <li>Install dependencies:
              <code className="bg-gray-800 px-2 py-1 rounded block my-1">npm install</code>
            </li>
            <li>Start the development server:
              <code className="bg-gray-800 px-2 py-1 rounded block my-1">npm start</code>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">How to Play</h2>
          <ul className="list-disc pl-8">
            <li>Select your character from the roster.</li>
            <li>Choose a stage to fight on.</li>
            <li>Use the controls to execute moves and combos to defeat your opponent.</li>
            <li>Win matches to progress through the game's stages.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Controls</h2>
          <ul className="list-disc pl-8">
            <li><strong>Move:</strong> Arrow keys</li>
            <li><strong>Punch:</strong> A key</li>
            <li><strong>Kick:</strong> S key</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Stages</h2>
          <ul className="list-disc pl-8">
            <li><strong>JPN-Street Stage:</strong> Designed by Manoru</li>
            <li><strong>China Stage:</strong> Designed by K.W</li>
            <li><strong>Korea Stage:</strong> Designed by Tsugumi A</li>
            <li><strong>Mid-East Stage:</strong> Designed by Raishi</li>
            <li><strong>Spain Stage:</strong> Designed by M.K</li>
            <li><strong>USA-Yard Stage:</strong> Designed by Tohru Nakanishi</li>
            <li><strong>JPN-Temple Stage:</strong> Designed by Yurika</li>
            <li><strong>USA-Wharf Stage:</strong> Designed by Tsugumi A</li>
            <li><strong>Rugal Stage:</strong> Designed by Souzi Takamori</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Credits</h2>
          <ul className="list-disc pl-8">
            <li><strong>Back Chief:</strong> Yurika</li>
            <li><strong>Cover:</strong> Hyeon Hyeon</li>
            <li><strong>JPN-Street Stage:</strong> Manoru</li>
            <li><strong>China Stage:</strong> K.W</li>
            <li><strong>Korea Stage:</strong> Tsugumi A</li>
            <li><strong>Mid-East Stage:</strong> Raishi</li>
            <li><strong>Spain Stage:</strong> M.K</li>
            <li><strong>USA-Yard Stage:</strong> Tohru Nakanishi</li>
            <li><strong>JPN-Temple Stage:</strong> Yurika</li>
            <li><strong>USA-Wharf Stage:</strong> Tsugumi A</li>
            <li><strong>Rugal Stage:</strong> Souzi Takamori</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Contributing</h2>
          <p>
            We welcome contributions from the community! If you would like to contribute, please fork the repository and submit a pull request with your changes. Make sure to follow the guidelines for contributions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">License</h2>
          <p>
            This project is licensed under the GNU General Public License (GPL). See the LICENSE file for more details.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
