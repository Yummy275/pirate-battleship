// board is 8 x 8
// 2d Array , 8 rows and each row 8 spots
// Spot can have value of
// W(water), H(hit), O(occupied), M(miss);

const boardFactory = () => {
    let boardState = [];

    for (var i = 0; i < 8; i++) {
        const row = [];
        for (var j = 0; j < 8; j++) {
            row.push('W');
        }
        boardState.push(row);
    }

    const placeShip = (shipLength, cord, axis) => {
        //minus 1 for cord so value is equal index in array
        //that way, inputs easier to understand imo
        //'1,1' , row 1 spot 1 '3,5', row 3 spot 5 etc.
        let [cordOne, cordTwo] = [...cord];

        for (var i = 0; i < shipLength; i++) {
            boardState[cordOne - 1][cordTwo - 1] = 'O';
            axis = 'X' ? cordTwo++ : cordOne++;
        }
    };

    const board = { boardState: boardState, placeShip };

    return board;
};

export default boardFactory;
