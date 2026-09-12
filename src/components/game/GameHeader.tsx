import { SPORT_THEMES, SportType } from '@/src/types/game';

interface GameHeaderProps {
  selectedSport: SportType;
  level: number;
  collectedCount: number;
  targetScore: number;
  score: number;
  timeLeft: number;
  onLeave: () => void;
}

export function GameHeader({
  selectedSport,
  level,
  collectedCount,
  targetScore,
  score,
  timeLeft,
  onLeave,
}: GameHeaderProps) {
  const currentTheme = SPORT_THEMES[selectedSport];

  return (
    <header className="flex flex-wrap items-center justify-between bg-slate-900 p-4 rounded-xl border border-slate-700 mb-4 gap-4">
      <div>
        <span className="text-slate-400 text-sm">Selected Sport:</span>
        <h2 className="text-xl font-bold text-yellow-400 capitalize">
          {currentTheme.ballEmoji} {currentTheme.name}
        </h2>
      </div>

      <div className="flex items-center gap-6">
        <div className="text-center">
          <span className="text-slate-400 text-xs block">LEVEL</span>
          <span className="text-xl font-bold text-indigo-400">{level}</span>
        </div>
        <div className="text-center">
          <span className="text-slate-400 text-xs block">TARGET</span>
          <span className="text-xl font-bold text-emerald-400">
            {collectedCount}/{targetScore}
          </span>
        </div>
        <div className="text-center">
          <span className="text-slate-400 text-xs block">SCORE (x2.4)</span>
          <span className="text-xl font-bold text-yellow-300">{score}</span>
        </div>
        <div className="text-center">
          <span className="text-slate-400 text-xs block">TIMER</span>
          <span
            className={`text-2xl font-bold ${
              timeLeft <= 3 ? 'text-red-500 animate-ping' : 'text-white'
            }`}
          >
            {timeLeft}s
          </span>
        </div>
      </div>

      <button
        onClick={onLeave}
        className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer"
      >
        Leave Game
      </button>
    </header>
  );
}