import { SudokuChecker } from './src/sudoku-checker'

const args = process.argv;
const filePath = args[2];

if (!filePath) {
    throw new Error("Deve especificar un archivo .csv.");
}

const checker: SudokuChecker = new SudokuChecker(filePath);

const check = checker.check();

console.log(check ? "Sudoku válido." : "Sudoku inválido.");

