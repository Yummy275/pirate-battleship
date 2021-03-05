// board is 8 x 8
// 2d Array , 8 rows and each row 8 spots
// Spot can have value of
// W(water), H(hit), O(occupied), M(miss);

const boardFactory = () => {
    const board = [];

    for (var i = 0; i < 8; i++) {
        const row = [];
        for (var j = 0; j < 8; j++) {
            row.push('W');
        }
        board.push(row);
    }

    const boardInfo = { boardState: board };

    return boardInfo;
};

export default boardFactory;
