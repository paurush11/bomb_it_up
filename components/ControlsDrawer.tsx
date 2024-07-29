import React, { useState } from 'react'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'
import { Button } from './ui/button'
import { SpeedComponents } from './SpeedComponent'
import { DifficultySlider } from './DifficultySlider'

interface ControlsDrawerProps {
    selectIndex: number
    difficultyValue: number
    reset: () => void
    canPlay: boolean
    setSelectIndex: React.Dispatch<React.SetStateAction<number>>
    setDifficultyValue: React.Dispatch<React.SetStateAction<number>>
    setCanPlay: React.Dispatch<React.SetStateAction<boolean>>
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ControlsDrawer: React.FC<ControlsDrawerProps> = ({
    selectIndex,
    difficultyValue,
    reset,
    canPlay,
    setSelectIndex,
    setDifficultyValue,
    setCanPlay,
    isOpen,
    setIsOpen
}) => {
    return (
        <Drawer open={isOpen}
            onClose={() => {
                setIsOpen(false)
            }}>
            <DrawerContent className=' overflow-scroll gap-4 p-4'>
                <DrawerHeader>
                    <DrawerTitle>Controls</DrawerTitle>
                    <DrawerDescription>Set Your Controls </DrawerDescription>
                </DrawerHeader>
                <SpeedComponents selectIndex={selectIndex} setSelectIndex={setSelectIndex} />
                <DifficultySlider difficultyValue={difficultyValue} setDifficultyValue={setDifficultyValue} />
                <div className="flex gap-4">
                    <Button
                        className='flex flex-1'
                        size={"lg"}
                        variant={canPlay ? "default" : "subtle"}
                        onClick={() => {
                            setCanPlay(true);
                            setIsOpen(false)

                        }}>Play</Button>
                    <Button
                        className='flex flex-1'
                        size={"lg"}
                        variant={"subtle"}
                        onClick={() => {
                            reset()
                            setIsOpen(false)
                        }}>Reset</Button>
                </div>

            </DrawerContent>
        </Drawer>

    );
}