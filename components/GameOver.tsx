import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useState, useEffect } from "react"

export function GameOverDialog({ onRestart, setCanPlay }: {
    onRestart: () => void
    setCanPlay: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const [open, setOpen] = useState(false)
    useEffect(() => {
        setOpen(true)
    }, [])

    return (
        <Dialog open={open} onOpenChange={setOpen}  >
            <DialogContent className="sm:max-w-md bg-primary-foreground" onClose={() => {
                setCanPlay(false)
                setOpen(false)
            }} >
                <DialogHeader>
                    <DialogTitle>Game Over!</DialogTitle>
                    <DialogDescription>
                        You hit a bomb. Better luck next time!
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-center">
                    <Button onClick={onRestart} type="button" variant="default">
                        Restart Game
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
