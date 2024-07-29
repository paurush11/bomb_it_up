"use client";

import { cn, createBombArray } from "@/lib/utils";
import { useMemo } from "react";
import { GameOverDialog } from "./GameOver";

interface BombProps {
    totalUnits: number
    difficultyValue: number
    iconPressedIndex: number[]
    isGameOver: boolean
    canPlay: boolean
    reset: () => void
    setIconPressedIndex: React.Dispatch<React.SetStateAction<number[]>>
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>
    setScore: React.Dispatch<React.SetStateAction<number>>
    setCanPlay: React.Dispatch<React.SetStateAction<boolean>>
}

const Bombs: React.FC<BombProps> = ({ totalUnits, difficultyValue, iconPressedIndex, setIconPressedIndex, setIsGameOver, isGameOver, reset, canPlay, setScore, setCanPlay }) => {

    const noOfBombs = Math.floor(totalUnits * (difficultyValue / 100));
    const bombs = useMemo(() => createBombArray(totalUnits, noOfBombs), [totalUnits, difficultyValue]);
    const diamondSvg = (<svg width={"50%"} height={"50%"} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#3498db", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#2980b9", stopOpacity: 1 }} />
            </linearGradient>
        </defs>

        {/* <!-- Base diamond shape --> */}
        <polygon points="50,0 100,50 50,100 0,50" fill="url(#diamondGradient)" stroke="#2c3e50" strokeWidth="2" />
        {/* 
    <!-- Inner diamond --> */}
        <polygon points="50,10 90,50 50,90 10,50" fill="#ecf0f1" stroke="#bdc3c7" strokeWidth="1" />

        {/* <!-- Center sparkle --> */}
        <polygon points="50,30 70,50 50,70 30,50" fill="#f1c40f" stroke="#f39c12" strokeWidth="1">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </polygon>

        {/* <!-- Reflection lines --> */}
        <line x1="20" y1="20" x2="40" y2="40" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
        <line x1="80" y1="20" x2="60" y2="40" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
    </svg>)
    const bombSvg = (
        <svg width={"50%"} height={"50%"} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="bombGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style={{ stopColor: "#ff3b3b", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#800000", stopOpacity: 1 }} />
                </radialGradient>
            </defs>

            {/* Bomb body */}
            <circle cx="50" cy="55" r="40" fill="url(#bombGradient)" stroke="#000000" strokeWidth="2" />

            {/* Fuse */}
            <path d="M50 15 Q60 5, 70 15" fill="none" stroke="#4a4a4a" strokeWidth="3" />

            {/* Bomb top */}
            <rect x="45" y="15" width="10" height="5" fill="#4a4a4a" />

            {/* Highlight */}
            <circle cx="35" cy="40" r="10" fill="#ff6b6b" opacity="0.6" />

            {/* Spark animation */}
            <circle cx="70" cy="15" r="3" fill="#ffff00">
                <animate attributeName="opacity" values="0;1;0" dur="0.5s" repeatCount="indefinite" />
            </circle>
        </svg>
    );
    const wrongBox = 'animate-shake animate-twice animate-duration-200 animate-ease-in-out animate-normal animate-fill-backwards'
    const correctBox = 'animate-pulse animate-twice animate-duration-200 animate-ease-in-out animate-normal animate-fill-backwards'
    const hoverAnimation = 'hover:animate-bounce hover:animate-once hover:animate-duration-1000 hover:animate-ease-in-out animate-normal hover:animate-fill-backwards'

    return (
        <div className="flex  flex-1 flex-col  lg:min-w-[70%] min-w-[90%] text-white border-r-2 p-2 items-center justify-center ">
            <div className="grid grid-cols-6 gap-4 p-4 w-full flex-1 ">
                {[...Array(totalUnits)].map((_, i) => (

                    <div
                        key={i}
                        className={cn("flex  min-h-20 max-h-80 rounded-md  bg-primary justify-center items-center shadow-2xl hover:shadow-md ", `${hoverAnimation}`, iconPressedIndex.includes(i) && (bombs[i] === true ? correctBox : wrongBox))}
                        style={{
                            backgroundColor: iconPressedIndex.includes(i) ? (bombs[i] === true ? "red" : "green") : "hsl(var(--primary))"
                        }}
                        onClick={() => {
                            if (canPlay) {
                                setIconPressedIndex([...iconPressedIndex, i]);
                                if (bombs[i] === true) {
                                    setIsGameOver(true);
                                } else {
                                    setScore((prev) => prev + 1)
                                }
                            }
                        }}

                    >

                        {iconPressedIndex.includes(i) && (bombs[i] === true ? bombSvg : diamondSvg)}
                    </div>

                ))}
                {isGameOver && <GameOverDialog
                    setCanPlay={setCanPlay}
                    onRestart={() => {
                        reset()
                    }} />
                }
            </div>


        </div >
    )
}

export {
    Bombs
}