import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Dispatch, SetStateAction } from "react"

export function GameOverDialog({ onRestart, setCanPlay, open, setOpen }: {
    onRestart: () => void
    setCanPlay: React.Dispatch<React.SetStateAction<boolean>>
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}) {
    const handleClose = () => {
        setCanPlay(false)
        setOpen(false)
    }


    return (
        <Dialog open={open} onOpenChange={setOpen}  >
            <DialogContent className="sm:max-w-md bg-primary-foreground" onClose={handleClose} >
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
