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

    //throw error
    expect(() => {
        testPlayer.placeMyShip(testPlayer.ships['battleship'], [1, 3], 'X');
    }).toThrow();
});

test('player ships body marking true', () => {
    testPlayer.placeMyShip(testPlayer.ships['carrier'], [1, 1], 'X');
    testPlayer.board.recieveAttack([1, 1]);
    expect(testPlayer.board.boardState[0][0]).toEqual('H');
    expect(testPlayer.ships['carrier'].body[0]).toEqual(true);
});
