import { SPORT_THEMES, SportType } from '@/src/types/game';
import { Trophy } from 'lucide-react';

const ALL_SPORTS: SportType[] = ['football', 'basketball', 'volleyball', 'rugby', 'tennis'];

interface WelcomeScreenProps {
  onSelectSport: (sport: SportType) => void;
}

export function WelcomeScreen({ onSelectSport }: WelcomeScreenProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl md:text-6xl flex justify-between items-center font-bold tracking-wider mb-4 text-emerald-700 drop-shadow-md">
        Welcome to D-Lucky-Game <Trophy height={100} width={60}/>
      </h1>
      <p className="text-lg md:text-xl text-slate-900 mb-8 max-w-lg">
        Match Breaktime? Pick a game or game ball to enter the court and test your reflexes!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
        {ALL_SPORTS.map((sportKey) => {
          const sport = SPORT_THEMES[sportKey];
          return (
            <button
              key={sportKey}
              onClick={() => onSelectSport(sportKey)}
              className={`${sport.bg} p-6 rounded-2xl border-4 shadow-xl hover:scale-105 transition-transform flex flex-col items-center justify-center gap-3 cursor-pointer`}
            >
              <span className="text-5xl">{sport.ballEmoji}</span>
              <span className="text-xl font-bold uppercase tracking-wider">{sport.name}</span>
            </button>
          );
        })}
      </div>
    </main>
  );
}