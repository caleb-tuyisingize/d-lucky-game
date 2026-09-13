// src/app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { PopUpItem, SPORT_THEMES, SportType } from '@/src/types/game';
import { WelcomeScreen } from '@/src/components/game/WelcomeScreen';
import { GameHeader } from '@/src/components/game/GameHeader';
import { CourtArea } from '@/src/components/game/CourtArea';

const ALL_SPORTS: SportType[] = ['football', 'basketball', 'volleyball', 'rugby', 'tennis'];

export default function Home() {
  const [selectedSport, setSelectedSport] = useState<SportType | null>(null);
  const [level, setLevel] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [targetScore, setTargetScore] = useState<number>(2);
  const [collectedCount, setCollectedCount] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(15);
  const [gameState, setGameState] = useState<'welcome' | 'playing' | 'passed' | 'gameover'>('welcome');
  const [activeItems, setActiveItems] = useState<PopUpItem[]>([]);

  const getRequiredCount = (lvl: number) => lvl * 2;
  const getTimeLimit = (lvl: number) => Math.max(8, 16 - lvl);

  const startGame = (sport: SportType) => {
    setSelectedSport(sport);
    setLevel(1);
    setScore(0);
    startLevel(1, sport);
  };

  const startLevel = (lvl: number, sport: SportType) => {
    setCollectedCount(0);
    setTargetScore(getRequiredCount(lvl));
    setTimeLeft(getTimeLimit(lvl));
    setActiveItems([]);
    setGameState('playing');
  };

  const handleNextLevel = () => {
    if (!selectedSport) return;
    const nextLvl = level + 1;
    setLevel(nextLvl);
    startLevel(nextLvl, selectedSport);
  };

  useEffect(() => {
    if (gameState !== 'playing') return;

    if (timeLeft <= 0) {
      setGameState(collectedCount >= targetScore ? 'passed' : 'gameover');
      return;
    }

    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [gameState, timeLeft, collectedCount, targetScore]);

  const handleSackClick = () => {
  if (gameState !== 'playing') return;

  const randomSport = ALL_SPORTS[Math.floor(Math.random() * ALL_SPORTS.length)];
  const isName = level >= 3 && Math.random() > 0.6;
  
  const itemId = Math.random().toString();

  const newItem: PopUpItem = {
    id: itemId,
    sport: randomSport,
    type: isName ? 'name' : 'ball',
    label: isName ? SPORT_THEMES[randomSport].name : undefined,
    x: Math.floor(Math.random() * 70) + 10,
    y: Math.floor(Math.random() * 60) + 10,
  };

  setActiveItems((prev) => [...prev, newItem]);

  setTimeout(() => {
    setActiveItems((prev) => prev.filter((item) => item.id !== itemId));
  }, 2000);
};

  const handleItemClick = (item: PopUpItem) => {
    if (gameState !== 'playing' || !selectedSport) return;

    if (item.sport === selectedSport) {
      const newCount = collectedCount + 1;
      setCollectedCount(newCount);
      setScore((prev) => Math.round((prev + 10) * 2.4));
      setActiveItems((prev) => prev.filter((i) => i.id !== item.id));

      if (newCount >= targetScore) setGameState('passed');
    } else {
      setScore((prev) => Math.max(0, Math.floor(prev / 2)));
      setActiveItems((prev) => prev.filter((i) => i.id !== item.id));
    }
  };

  const leaveGame = () => {
    setGameState('welcome');
    setSelectedSport(null);
    setLevel(1);
    setScore(0);
  };

  if (gameState === 'welcome' || !selectedSport) {
    return <WelcomeScreen onSelectSport={startGame} />;
  }

  return (
    <main className="flex flex-col min-h-screen p-4 md:p-8">
      <GameHeader
        selectedSport={selectedSport}
        level={level}
        collectedCount={collectedCount}
        targetScore={targetScore}
        score={score}
        timeLeft={timeLeft}
        onLeave={leaveGame}
      />
      <CourtArea
        selectedSport={selectedSport}
        gameState={gameState}
        activeItems={activeItems}
        score={score}
        level={level}
        targetScore={targetScore}
        collectedCount={collectedCount}
        onSackClick={handleSackClick}
        onItemClick={handleItemClick}
        onNextLevel={handleNextLevel}
        onRetry={() => startLevel(level, selectedSport)}
        onLeave={leaveGame}
      />
    </main>
  );
}