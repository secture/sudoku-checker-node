import { SudokuChecker } from './src/sudoku-checker'

const checker: SudokuChecker = new SudokuChecker('C:/Users/pablo/dev/desafi-secture/sudoku-checker-node/data/right.csv')

const check = checker.check()

console.log(check ? "Sudoku válido." : "Sudoku inválido.");

