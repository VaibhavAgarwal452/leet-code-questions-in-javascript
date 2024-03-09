/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rows = [], cols = [], boxes = []
    for (let i = 0; i < board.length; i++) {
        rows.push(new Set())
        cols.push(new Set())
        boxes.push(new Set())
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const cell = board[i][j]
            if (cell == ".") continue;
            const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3)
            if (rows[i].has(cell) || cols[i].has(cell) || boxes[i].has(boxNum)) return false
            rows[i].add(cell)
            cols[i].add(cell)
            boxes[i].add(cell)
        }
    }
    return true
};

const isValidSudokuSolution2 = function (board) {
    let set = new Set()
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const cell = board[i][j]
            const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3)
            const row = `row: ${i}, value: ${cell}`
            const col = `col: ${j}, value: ${cell}`
            const box = `box: ${boxNum}, value: ${cell}`

            if (cell == ".") continue
            if (set.has(row) || set.has(col) || set.has(box)) return false
            set.add(row)
            set.add(col)
            set.add(box)
        }
    }
    console.log(set, "set")
    return true
}

// console.log(isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))
console.log(isValidSudokuSolution2([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))
