"use client";
import React, { Dispatch, SetStateAction } from 'react'
import { Slider } from "@/components/ui/slider"


interface DifficultySliderProps {
    difficultyValue: number
    setDifficultyValue: Dispatch<SetStateAction<number>>
    setCanPlay: React.Dispatch<React.SetStateAction<boolean>>
}

export const DifficultySlider: React.FC<DifficultySliderProps> = ({ difficultyValue, setDifficultyValue, setCanPlay }) => {
    return (
        <div className="flex">
            <Slider max={100} step={1} onValueChange={(e: any) => {
                setDifficultyValue(e[0])
                setCanPlay(false)

            }} value={[difficultyValue]} />
        </div>
    );
}