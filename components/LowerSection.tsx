import React from 'react'
import { ControlsDrawer } from './ControlsDrawer';
import { Button } from './ui/button';

interface LowerSectionProps {
    selectIndex: number
    difficultyValue: number
    reset: () => void
    canPlay: boolean
    setSelectIndex: React.Dispatch<React.SetStateAction<number>>
    setDifficultyValue: React.Dispatch<React.SetStateAction<number>>
    setCanPlay: React.Dispatch<React.SetStateAction<boolean>>
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    setPlayerWon: React.Dispatch<React.SetStateAction<boolean>>
}

export const LowerSection: React.FC<LowerSectionProps> = ({
    selectIndex,
    difficultyValue,
    reset,
    canPlay,
    setSelectIndex,
    setDifficultyValue,
    setCanPlay,
    isOpen,
    setIsOpen,
    setPlayerWon
}) => {
    return (
        <div className="flex gap-4 w-full justify-center bottom-0 p-4 border-border border-t-2 rounded-t-lg bg-foreground ">
            <Button className='lg:hidden ' onClick={() => setIsOpen(true)}>Controls</Button>
            <ControlsDrawer
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                selectIndex={selectIndex}
                setSelectIndex={setSelectIndex}
                difficultyValue={difficultyValue}
                setDifficultyValue={setDifficultyValue}
                reset={reset}
                canPlay={canPlay}
                setCanPlay={setCanPlay}
                setPlayerWon={setPlayerWon}

            />
        </div>
    );
}