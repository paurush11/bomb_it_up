import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const createBombArray = (totalUnits: number, noOfBombs: number): boolean[] => {
  const bombArray = new Array(totalUnits).fill(false);
  let bombsPlaced = 0;

  while (bombsPlaced < noOfBombs) {
      const randomIndex = Math.floor(Math.random() * totalUnits);
      if (!bombArray[randomIndex]) {
          bombArray[randomIndex] = true;
          bombsPlaced++;
      }
  }

  return bombArray;
};