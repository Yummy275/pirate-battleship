import rand from './random';
import playerFactory from '../game/player';

let testPlayer;
beforeEach(() => {
    testPlayer = playerFactory();
});

test('random board generator generates board', () => {
    rand.fillBoardRandomly(testPlayer);
    let occCount = 0;
    for (const row of testPlayer.board.boardState) {
        for (const spot of row) {
            if (spot === 'O') {
                occCount++;
            }
        }
    }
    expect(occCount).toEqual(17);
});

test('random attacking', () => {
    const tp = playerFactory();
    rand.attackBoardRandomly(testPlayer, tp);
    rand.attackBoardRandomly(testPlayer, tp);
    let missSpotCount = 0;
    for (const row of tp.board.boardState) {
        for (const spot of row) {
            if (spot === 'M') {
                missSpotCount++;
            }
        }
    }
    expect(missSpotCount).toEqual(2);
});
