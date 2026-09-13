import { PopUpItem, SPORT_THEMES, SportType } from "@/src/types/game";
import { MagicSack } from "./MagicSack";
import { GameModals } from "./GameModals";

interface CourtAreaProps {
  selectedSport: SportType;
  gameState: "playing" | "passed" | "gameover";
  activeItems: PopUpItem[];
  score: number;
  level: number;
  targetScore: number;
  collectedCount: number;
  onSackClick: () => void;
  onItemClick: (item: PopUpItem) => void;
  onNextLevel: () => void;
  onRetry: () => void;
  onLeave: () => void;
}

export function CourtArea({
  selectedSport,
  gameState,
  activeItems,
  score,
  level,
  targetScore,
  collectedCount,
  onSackClick,
  onItemClick,
  onNextLevel,
  onRetry,
  onLeave,
}: CourtAreaProps) {
  const currentTheme = SPORT_THEMES[selectedSport];

  return (
    <div
      className={`relative flex-1 rounded-2xl border-4 ${currentTheme.bg} overflow-hidden shadow-2xl min-h-[450px] flex items-center justify-center`}
    >
      <div className="absolute inset-4 border-2 border-white/20 rounded-xl pointer-events-none flex items-center justify-center">
        <div className="w-full border-t-2 border-white/20"></div>
        <div className="absolute w-32 h-32 border-2 border-white/20 rounded-full"></div>
      </div>

      {activeItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onItemClick(item)}
          style={{ top: `${item.y}%`, left: `${item.x}%` }}
          className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 animate-pulse hover:scale-125 active:scale-95 cursor-pointer"
        >
          {item.type === "ball" ? (
            <span className="text-5xl filter drop-shadow-md select-none">
              {SPORT_THEMES[item.sport].ballEmoji}
            </span>
          ) : (
            <span className="bg-slate-900/90 text-yellow-300 font-extrabold px-3 py-1.5 rounded-lg border border-yellow-400 text-sm shadow-lg whitespace-nowrap select-none">
              {item.label}
            </span>
          )}
        </button>
      ))}

      {/* Magic Sack */}
      {gameState === "playing" && <MagicSack onSackClick={onSackClick} />}

      {/* Modals */}
      {gameState !== "playing" && (
        <GameModals
          gameState={gameState}
          score={score}
          level={level}
          targetScore={targetScore}
          collectedCount={collectedCount}
          onNextLevel={onNextLevel}
          onRetry={onRetry}
          onLeave={onLeave}
        />
      )}
    </div>
  );
}
