// test right
// test wrong

import { SudokuChecker } from '../src/sudoku-checker'

describe('Test class SudokuChecker', () => {
    it('Test no file error.', () => {
        try {
            const checker: SudokuChecker = new SudokuChecker('');
        } catch (error: any) {
            expect(error.message).toBe("Error: El archivo especificado no existe.");
        }
    });
    it('Test wrong extension error.', () => {
        try {
            const checker: SudokuChecker = new SudokuChecker(__filename);
        } catch (error: any) {
            expect(error.message).toBe("Error: El archivo especificado deve tener extensión .csv.");
        }
    });
    it('Test malformed file: wrong line count.', () => {
        try {
            const checker: SudokuChecker = new SudokuChecker(`${__dirname}/data/malformed.csv`);
        } catch (error: any) {
            expect(error.message).toBe("Error: Formato incorrecto. Número de lineas inválido.");
        }
    });
    it('Test malformed file: wrong column count.', () => {
        try {
            const checker: SudokuChecker = new SudokuChecker(`${__dirname}/data/malformed2.csv`);
        } catch (error: any) {
            expect(error.message).toBe("Error: Formato incorrecto. Número de columnas inválido.");
        }
    });
    it('Test malformed file: Not just numbers.', () => {
        try {
            const checker: SudokuChecker = new SudokuChecker(`${__dirname}/data/malformed3.csv`);
        } catch (error: any) {
            expect(error.message).toBe("Error: Formato incorrecto. Sólo son válidos número del 1 al 9.");
        }
    });
    it('Test right file.', () => {
        const checker: SudokuChecker = new SudokuChecker(`${__dirname}/data/right.csv`);
        expect(checker.check()).toBe(true);
    });
    it('Test wrong file.', () => {
        const checker: SudokuChecker = new SudokuChecker(`${__dirname}/data/wrong.csv`);
        expect(checker.check()).toBe(false);
    });
});