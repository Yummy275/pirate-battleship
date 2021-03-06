import playerFactory from './player.js';

let testPlayer;
beforeEach(() => {
    testPlayer = playerFactory();
});

test('player creation', () => {
    expect(testPlayer).toHaveProperty('board');
    expect(testPlayer).toHaveProperty('ships');
});

test('player placing on their board', () => {
    testPlayer.placeMyShip(testPlayer.ships['carrier'], [1, 1], 'X');
    expect(testPlayer.board.boardState[0][0]).toEqual('O');
    expect(testPlayer.board.boardState[0][1]).toEqual('O');
    expect(testPlayer.board.boardState[0][2]).toEqual('O');
    expect(testPlayer.board.boardState[0][3]).toEqual('O');
    expect(testPlayer.board.boardState[0][4]).toEqual('O');

    //test to make sure ships body spots cord match
    expect(testPlayer.ships['carrier'].body[0].cord).toEqual([1, 1]);
    expect(testPlayer.ships['carrier'].body[1].cord).toEqual([1, 2]);
    expect(testPlayer.ships['carrier'].body[2].cord).toEqual([1, 3]);
    expect(testPlayer.ships['carrier'].body[3].cord).toEqual([1, 4]);
    expect(testPlayer.ships['carrier'].body[4].cord).toEqual([1, 5]);

    //throw for illegal place error
    expect(() => {
        testPlayer.placeMyShip(testPlayer.ships['battleship'], [1, 3], 'X');
    }).toThrow();
});

test('player ships body marking true', () => {
    testPlayer.placeMyShip(testPlayer.ships['carrier'], [1, 1], 'X');
    testPlayer.attackBoard(testPlayer.board, [1, 1]);
    expect(testPlayer.board.boardState[0][0]).toEqual('H');
    expect(testPlayer.ships['carrier'].body[0].hitMarker).toEqual(true);
});
