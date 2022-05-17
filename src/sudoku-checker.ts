import { Sudoku } from "./interfaces";
import { readSudokuFile } from "./utils";

export class SudokuChecker {

    private sudoku: Sudoku;

    constructor(path: string) {
        this.sudoku = readSudokuFile(path);
    }

    public check(): boolean {
        return this.checkElement(this.sudoku.lines)
        && this.checkElement(this.sudoku.columns)
        && this.checkElement(this.sudoku.squares);
    }

    private checkElement(element: number[][]): boolean {
        let verify = true;
        element.forEach(array => {
            verify = (new Set(array)).size === array.length;
        });

        return verify;
    }
}
