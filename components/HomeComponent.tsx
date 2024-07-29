"use client"

import React, { useEffect, useState } from 'react';
import { Bombs } from './Bombs';
import { ControlsDrawer } from './ControlsDrawer';
import { ControlsLayout } from './ControlsLayout';
import { Button } from './ui/button';
import { LowerSection } from './LowerSection';
interface HomeComponentProps {

}

export const HomeComponent: React.FC<HomeComponentProps> = ({ }) => {
    const [selectIndex, setSelectIndex] = useState(6);
    const [difficultyValue, setDifficultyValue] = useState(33);
    const [iconPressedIndex, setIconPressedIndex] = useState<number[]>([]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [canPlay, setCanPlay] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [score, setScore] = useState(0);
    const [playerWon, setPlayerWon] = useState(false);
    const reset = () => {
        // setSelectIndex(6);
        setDifficultyValue(33);
        setIconPressedIndex([]);
        setIsGameOver(false);
        setCanPlay(false);
        setIsOpen(false);
        setPlayerWon(false);
        setScore(0);
    }
    useEffect(() => {
        setIconPressedIndex([]);
    }, [selectIndex, difficultyValue])
    useEffect(() => {
        const noOfBombs = Math.floor(selectIndex * (difficultyValue / 100));
        if (score === selectIndex - noOfBombs - 1 && score !== 0) {
            setPlayerWon(true);
        }
    }, [score])

    return (
        <div className="bg-foreground min-h-screen">
            <div className="lg:flex bg-foreground min-h-screen hidden">
                {playerWon && <div className='flex flex-1 flex-col min-h-screen items-center justify-center border-border border-r-2 z-20 min-w-[70%] absolute'>
                    <h1 className='text-xl text-center text-primary'>You Won!</h1>
                    <Button className='mt-4' onClick={() => reset()}>Play Again</Button>
                </div>}
                {<Bombs
                    playerWon={playerWon}
                    setCanPlay={setCanPlay}
                    totalUnits={selectIndex}
                    difficultyValue={difficultyValue}
                    iconPressedIndex={iconPressedIndex}
                    setIconPressedIndex={setIconPressedIndex}
                    reset={reset}
                    isGameOver={isGameOver}
                    setIsGameOver={setIsGameOver}
                    canPlay={canPlay}
                    setScore={setScore} />}
                <ControlsLayout
                    setPlayerWon={setPlayerWon}
                    score={score}
                    selectIndex={selectIndex}
                    difficultyValue={difficultyValue}
                    reset={reset}
                    canPlay={canPlay}
                    setSelectIndex={setSelectIndex}
                    setDifficultyValue={setDifficultyValue}
                    setCanPlay={setCanPlay}
                    playerWon={playerWon} />
            </div>
            <div className='lg:hidden flex bg-foreground min-h-screen flex-col gap-4'>
                <Bombs
                    playerWon={playerWon}
                    setCanPlay={setCanPlay}
                    totalUnits={selectIndex}
                    difficultyValue={difficultyValue}
                    iconPressedIndex={iconPressedIndex}
                    setIconPressedIndex={setIconPressedIndex}
                    reset={reset}
                    isGameOver={isGameOver}
                    setIsGameOver={setIsGameOver}
                    canPlay={canPlay}
                    setScore={setScore} />

                <LowerSection isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    selectIndex={selectIndex}
                    setSelectIndex={setSelectIndex}
                    difficultyValue={difficultyValue}
                    setDifficultyValue={setDifficultyValue}
                    reset={reset}
                    canPlay={canPlay}
                    setCanPlay={setCanPlay} />
            </div>
        </div>
    );
}