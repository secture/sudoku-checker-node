interface NumberSet {
    set: number[];
};

export interface Sudoku {
    lines: NumberSet[];
    columns: NumberSet[];
    squares: NumberSet[];
};