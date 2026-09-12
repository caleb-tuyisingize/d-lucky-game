import { Award, Frown, HighlighterIcon, MenuIcon, PlaneIcon, RefreshCcw } from "lucide-react";

interface GameModalsProps {
  gameState: 'passed' | 'gameover';
  score: number;
  level: number;
  targetScore: number;
  collectedCount: number;
  onNextLevel: () => void;
  onRetry: () => void;
  onLeave: () => void;
}

export function GameModals({
  gameState,
  score,
  level,
  targetScore,
  collectedCount,
  onNextLevel,
  onRetry,
  onLeave,
}: GameModalsProps) {
  if (gameState === 'passed') {
    return (
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm z-30 flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-4xl flex justify-between items-center md:text-5xl font-extrabold text-emerald-400 mb-2">
          <Award  height={100} width={60}/> Level Passed!
        </h2>
        <p className="text-lg text-slate-200 mb-4">
          Great job! Your current score is{' '}
          <span className="text-yellow-400 font-bold">{score}</span>
        </p>
        {level >= 2 && (
          <p className="text-sm flex justify-between items-center text-yellow-200 mb-6 bg-yellow-900/40 px-4 py-2 rounded-lg border border-yellow-500/40">
            <HighlighterIcon /> Hint: Higher levels now introduce random sport names inside the sack!
          </p>
        )}
        <button
          onClick={onNextLevel}
          className="bg-emerald-500 flex justify-between items-center hover:bg-emerald-600 text-slate-950 font-extrabold px-8 py-4 rounded-xl text-xl shadow-lg transition-transform hover:scale-105 cursor-pointer"
        >
          Next Level <PlaneIcon />
        </button>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-30 flex flex-col items-center justify-center text-center p-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center align-center justify-center flex text-red-500 mb-2"><Frown  height={44} width={60}/> Game Over</h2>
      <p className="text-lg text-slate-300 mb-6">
        Time ran out! You needed <span className="text-white font-bold">{targetScore}</span> items but got{' '}
        <span className="text-red-400 font-bold">{collectedCount}</span>.
      </p>
      <div className="flex gap-4">
        <button
          onClick={onRetry}
          className="bg-yellow-500 w-70 flex justify-between hover:bg-yellow-600 text-slate-950 font-bold px-6 py-3 rounded-xl transition-transform hover:scale-105 cursor-pointer"
        >
          Try Level Again <RefreshCcw />
        </button>
        <button
          onClick={onLeave}
          className="bg-slate-700 hover:bg-slate-600 w-70 flex justify-between text-white font-bold px-6 py-3 rounded-xl transition-colors cursor-pointer"
        >
          Main Menu <MenuIcon />
        </button>
      </div>
    </div>
  );
}