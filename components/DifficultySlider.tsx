"use client";
import React, { Dispatch, SetStateAction } from 'react'
import { Slider } from "@/components/ui/slider"


interface DifficultySliderProps {
    difficultyValue: number
    setDifficultyValue: Dispatch<SetStateAction<number>>
}

export const DifficultySlider: React.FC<DifficultySliderProps> = ({ difficultyValue, setDifficultyValue }) => {
    return (
        <div className="flex">
            <Slider max={100} step={1} onValueChange={(e: any) => setDifficultyValue(e[0])} value={[difficultyValue]} />
        </div>
    );
}