import { squareIndexes, Sudoku } from "./interfaces";
import * as fs from "fs";

export const readSudokuFile = (path: string): Sudoku => {
    try {
        const data: string = fs.readFileSync(path, 'utf8');
        formatFile(data);
        const sudoku: Sudoku = formatFile(data);
        return sudoku;
    } catch (err: any) {
        throw new Error(err);
    }
}; 

const formatFile = (data: string): Sudoku => {
    const sudoku: Sudoku = {
        lines: [],
        columns: [],
        squares: [],
    };

    const lines = data.split('\r\n');
    
    if (lines.length < 9) {
        throw new Error("Formato incorrecto. Número de lineas inválido.");
    }

    sudoku.lines = getLines(lines);
    validate(sudoku.lines);
    sudoku.columns = getColumns(sudoku.lines);
    sudoku.squares = getSquares(sudoku.lines);
    
    return sudoku;    
};

const validate = (elements: number[][]): void => {
    for (const element of elements) {
        if (element.length !== 9) {
            throw new Error("Formato incorrecto. Número de columnas inválido.");
        } 
        if (!element.join('').match(/^[1-9]+$/)) {
            throw new Error("Formato incorrecto. Sólo son válidos número del 1 al 9.");
        }
    }
};

const getSquares = (lines: number[][]): number[][] => {
    const parsedSquares: number[][] = [];

    for (const squareIndex of squareIndexes) {
        const square: number[] = [];
        for (const index of squareIndex) {
            square.push(lines[index[0]][index[1]]);
        }
        parsedSquares.push(square);
    }

    return parsedSquares;
};

const getLines = (lines: string[]): number[][] => {
    const parsedLines: number[][] = [];

    for (const line of lines) {
        if (line.length > 0) {
            const set: number[] = line.split(';').map(Number);
            parsedLines.push(set);
        }
    }

    return parsedLines;
};

const getColumns = (lines: number[][]): number[][] => {
    const parsedColumns: number[][] = [];

    for (let i = 0 ; i < 9 ; i++) {
        const column: number[] = [];
        for(const line of lines) {
            column.push(line[i]);
        }
        parsedColumns.push(column);
    }

    return parsedColumns;
};