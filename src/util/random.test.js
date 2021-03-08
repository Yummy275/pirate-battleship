import rand from './random';
import playerFactory from '../game/player';

test('random board generator generates board', () => {
    const testPlayer = playerFactory();
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
