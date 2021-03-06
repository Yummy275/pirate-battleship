import boardFactory from './board.js';

let board;
beforeEach(() => {
    board = boardFactory();
});

test('creation of blank board', () => {
    //test for 8 rows
    expect(board.boardState.length).toBe(8);

    //tests for 8 spots in each row
    //and each spot to have 'W' value
    for (const row of board.boardState) {
        expect(row.length).toBe(8);
        for (const spot of row) {
            expect(spot).toBe('W');
        }
    }
});

test('placing ship on board', () => {
    board.placeShip(3, [1, 1], 'X');
    expect(board.boardState[0][0]).toEqual('O');
    expect(board.boardState[0][1]).toEqual('O');
    expect(board.boardState[0][2]).toEqual('O');
    expect(board.boardState[0][3]).toEqual('W');
    board.placeShip(3, [2, 2], 'Y');
    expect(board.boardState[1][1]).toEqual('O');
    expect(board.boardState[1][2]).toEqual('O');
    expect(board.boardState[1][3]).toEqual('O');
    expect(board.boardState[1][4]).toEqual('W');
});
