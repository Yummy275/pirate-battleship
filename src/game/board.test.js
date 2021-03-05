import boardFactory from './board.js';

test('creation of blank board', () => {
    const board = boardFactory();

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
