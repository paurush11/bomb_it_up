import React from 'react'
import { SpeedComponents } from './SpeedComponent';
import { DifficultySlider } from './DifficultySlider';
import { Button } from './ui/button';

interface ControlsLayoutProps {
    selectIndex: number
    difficultyValue: number
    reset: () => void
    canPlay: boolean
    score: number
    setSelectIndex: React.Dispatch<React.SetStateAction<number>>
    setDifficultyValue: React.Dispatch<React.SetStateAction<number>>
    setCanPlay: React.Dispatch<React.SetStateAction<boolean>>
    setPlayerWon: React.Dispatch<React.SetStateAction<boolean>>
    playerWon: boolean
}

export const ControlsLayout: React.FC<ControlsLayoutProps> = ({
    selectIndex,
    difficultyValue,
    reset,
    canPlay,
    setSelectIndex,
    setDifficultyValue,
    setCanPlay,
    setPlayerWon,
    score,
    playerWon
}) => {


    return (
        <>
            <div className="flex h-full min-w-[30%] text-white p-6 flex-col gap-4">
                <div className="flex items-center justify-center text-2xl bg-primary p-4 rounded-xl max-md:text-lg">
                    Controls
                </div>
                <div className="flex flex-col gap-8">
                    <SpeedComponents
                        setPlayerWon={setPlayerWon}
                        setCanPlay={setCanPlay}
                        selectIndex={selectIndex}
                        setSelectIndex={setSelectIndex} />
                    <DifficultySlider
                        setPlayerWon={setPlayerWon}
                        setCanPlay={setCanPlay}
                        difficultyValue={difficultyValue}
                        setDifficultyValue={setDifficultyValue} />
                    <div className="flex w-full justify-center items-stretch flex-1 gap-4">

                        <Button
                            className='flex flex-1'
                            size={"lg"}
                            variant={canPlay ? "default" : "subtle"}
                            onClick={() => {
                                setCanPlay(true);
                            }}>Play</Button>
                        <Button
                            className='flex flex-1'
                            size={"lg"}
                            variant={"subtle"}
                            onClick={() => reset()}>Reset</Button>
                    </div>

                    <div className="flex w-full justify-center items-stretch flex-1 gap-4">
                        <div className="flex">Score</div>
                        <div className="flex">{score}</div>
                    </div>
                    {playerWon && <div className="flex w-full justify-center items-stretch flex-1 gap-4">You Won!</div>}
                </div>
            </div>



        </>
    );
}