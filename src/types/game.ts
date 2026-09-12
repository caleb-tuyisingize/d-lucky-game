export type SportType = 'football' | 'basketball' | 'volleyball' | 'rugby' | 'tennis';

export type PopUpItemType = 'ball' | 'name';

export interface PopUpItem {
  id: string;
  sport: SportType;
  type: PopUpItemType;
  label?: string;
  x: number;
  y: number;
}

export interface LevelConfig {
  targetCount: number;
  timeLimit: number;
}

export const SPORT_THEMES: Record<SportType, { bg: string; name: string; ballEmoji: string }> = {
  football: { bg: 'bg-emerald-700 border-white', name: 'Football', ballEmoji: '⚽' },
  basketball: { bg: 'bg-amber-700 border-amber-200', name: 'Basketball', ballEmoji: '🏀' },
  volleyball: { bg: 'bg-yellow-600 border-blue-400', name: 'Volleyball', ballEmoji: '🏐' },
  rugby: { bg: 'bg-lime-800 border-white', name: 'Rugby', ballEmoji: '🏉' },
  tennis: { bg: 'bg-lime-600 border-white', name: 'Tennis', ballEmoji: '🎾' },
};