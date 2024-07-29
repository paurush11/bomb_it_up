"use client";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";

interface SpeedComponentProps {
    selectIndex: number
    setSelectIndex: Dispatch<SetStateAction<number>>
    setCanPlay: React.Dispatch<React.SetStateAction<boolean>>
    setPlayerWon: React.Dispatch<React.SetStateAction<boolean>>
}

const SpeedComponents: React.FC<SpeedComponentProps> = ({
    selectIndex, setSelectIndex, setCanPlay, setPlayerWon
}) => {
    return <div className="flex  border-2 rounded-md flex-col ">
        <div className="flex bg-primary  rounded-t-md p-4  text-lg">Boxes</div>
        <div className="grid grid-cols-2 gap-4 p-4">
            {[...Array(8)].map((_, i) => (
                <Button
                    key={i}
                    onClick={() => {
                        setSelectIndex(6 * (i + 1))
                        setCanPlay(false)
                        setPlayerWon(false)
                    }}
                    variant={selectIndex === 6 * (i + 1) ? "default" : "secondary"}
                >
                    {6 * (i + 1)}
                </Button>
            ))}
        </div>
    </div>
}

export {
    SpeedComponents
}