import  { useEffect, useState ,useRef} from 'react';
import stage from '../assets/Stages/stage3.gif';
import backgroundMusic from '../assets/theme.mp3';
import fightAudio from '../assets/fightaudio-[AudioTrimmer.com].mp3'
import { ClipLoader } from 'react-spinners';
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
  const [loading, setLoading] = useState(true); // Track loading state
  const [position, setPosition] = useState(0);
  const step = 20;
  const [playerState, setPlayerState] = useState<Player | undefined>(undefined);
  const villainStartPos = 240;
  const { _id } = useParams<{ _id: string }>();
  const [players, setPlayers] = useState<Player[]>([]);
  const [villain, setVillain] = useState<Player | undefined>(undefined);
  const attackRange = 300;
  const [villainState, setVillainState] = useState<string>('stand');
  const [playerHealth, setPlayerHealth] = useState(100);
  const [villainHealth, setVillainHealth] = useState(100);
  const audioTheme = useRef(new Audio(backgroundMusic)); 
  const audioFightEffect = useRef(new Audio(fightAudio)); 
 
  const getRandomNumber = (max: number): number => {
    let number = Math.floor(Math.random() * max);
    return number === 0 && max > 1 ? getRandomNumber(max) : number;
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/players/');
        const audio = audioTheme.current;
        if (!res.ok) {
          throw new Error('Failed to fetch players');
        }
        audio.loop =true;     
      //audio.play();    // Remember to play this 
                                    
        const data = await res.json();
        setPlayers(data.data);

        const player = data.data.find((p: Player) => p._id === _id);
        if (player) {
          setPlayerState(player);
        }

        if (data.data.length > 0) {

          const villain = data.data[getRandomNumber(data.data.length)];
          if (villain) {
            setVillainState(villain.stand);
            setVillain(villain);
          }
        }
        
      } catch (error) {
        console.error('Error fetching players', error);
      }finally{
        setLoading(false); // Hide loader once done
      }
    };

    fetchPlayers();
  }, [_id]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      setPosition((prevX) => {
        let newPosition = prevX;

        if (event.key === 'ArrowLeft') {
          newPosition = prevX - step;
        } else if (event.key === 'ArrowRight') {
          newPosition = prevX + step;
        }

        // Prevent player from moving past the villain
        if (newPosition + 30 >= villainStartPos) {
          return prevX;
        }
    
        return newPosition;
      });
    };
    if(position >=190 && position<=200){
      setPlayerHealth(playerHealth-5)
   }
    
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);
  useEffect(() => {
    const handleAttack = (event: KeyboardEvent) => {
      setPlayerState((prev) => {
        if (!prev) return prev; 
  
        let newState = { ...prev };
        const audio = audioFightEffect.current;
        if (event.key === 'A' || event.key === 'a') {
          newState = { ...prev, stand: prev.punch }; // Set player to punch
          audio.play();
        } else if (event.key === 'S' || event.key === 's') {
          newState = { ...prev, stand: prev.kick }; // Set player to kick
          audio.play();
        } else {
          return prev; // Do nothing if other keys are pressed
        }
        if(position >=190 && position<=200){
          setVillainHealth(villainHealth-5)
        }
        
        // Remove event listener after pressing once
        window.removeEventListener('keydown', handleAttack);
  
        // Automatically reset to standing after 500ms
        setTimeout(() => {
          setPlayerState((current) => ({
            ...current!,
            stand: prev.stand, // Reset to standing
          }));
  
          // Re-add the event listener after reset
          window.addEventListener('keydown', handleAttack);
        }, 500);
  
        return newState;
      });
    };
  
    // Add event listener for attack keys
    window.addEventListener('keydown', handleAttack);
  
    // Cleanup: remove event listener when component unmounts
    return () => window.removeEventListener('keydown', handleAttack);
  }, []);
  
  
  useEffect(() => {
    let attackInterval: NodeJS.Timeout | undefined;
  
    if (position >= 180 && position <= 200) {
      attackInterval = setInterval(() => {
        const attackType = Math.random() > 0.5 ? villain?.punch : villain?.kick;
        const audio = audioFightEffect.current;
        if (attackType) {
          setVillainState(attackType);
          audio.play();
        }
  
        console.log(playerHealth);
      }, 500); // Repeatedly attack every 500ms while in the range
    } else {
      if (attackInterval) {
        clearInterval(attackInterval); // Clear interval if player moves out of range
      }
      if (villain?.stand) {
        setVillainState(villain.stand); // Set villain to stand animation
      }
    }
  

    return () => {

      if (attackInterval) {
        clearInterval(attackInterval);
      }
    };
  }, [position, villain]);
  
 useEffect(() =>{
  if(position >=190 && position<=200){
    setVillainHealth(villainHealth-5)
  }
 },[villainHealth]);
 useEffect(() =>{
  if(position >=190 && position<=200){
    setPlayerHealth(playerHealth-5)
  }
 },[playerHealth]);

 if (loading) {   //loading thinggg
  return (
    <div className="flex justify-center items-center h-screen bg-black/80">
      <ClipLoader size={50} color="#F87171" />
    </div>
  );


}

  return (
    <div
      className="h-screen w-full bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${stage})` }}
    >
      <div className="flex justify-between items-center px-8 pt-8">
        <div className="flex items-center space-x-6">
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
          <div className="w-92 h-6 bg-gray-800 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
              style={{ width: `${playerHealth}` }}
            ></div>
          </div>
        </div>
        <div className="text-amber-200 py-6">
          <span className="text-6xl font-extrabold drop-shadow-md">VS</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="w-92 h-6 bg-gray-800 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
              style={{ width: `${villainHealth}` }}
            ></div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={`data:image/gif;base64,${villain?.face}`}
              alt="Player 2"
              className="h-32 w-32 rounded-full border-4 border-amber-500 shadow-lg"
            />
            <div className="mt-3 bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-2 rounded text-amber-300 font-semibold">
              {villain?.name}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-3/4">
        <div className="h-[400px] w-[270px]" style={{ transform: `translatex(${position}px)` }}>
          <img
            src={`data:image/gif;base64,${playerState?.stand}`}
            className="h-[400px] w-[270px] transform scale-x-[-1]"
          />
        </div>

    
        <div
  className="text-amber-300 text-7xl font-extrabold animate-pulse tracking-widest drop-shadow-lg opacity-100"
  style={{
    animation: 'fadeOut 1s ease-in-out 5s forwards',
  }}
>
  Fight!
</div>

<style>
  {`
    @keyframes fadeOut {
      to {
        opacity: 0;
        visibility: hidden;
      }
    }
  `}
</style>

   

        <div className="h-[400px] w-[270px]" style={{ transform: `translatex(${-position}px)` }}>
          <img src={`data:image/gif;base64,${villainState}`} className="h-[400px] w-[270px] transform" />
        </div>
      </div>
    </div>
  );
};

export default Game;
