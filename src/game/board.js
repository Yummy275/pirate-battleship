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

    //ship placement checker
    const checkPlacement = (shipLength, cordOne, cordTwo, axis) => {
        if (shipLength + cordOne > 8 || shipLength + cordTwo > 8) {
            throw new Error('Not enough room for ship to be placed here.');
        }

        for (var i = 0; i < shipLength; i++) {
            if (boardState[cordOne][cordTwo] === 'O') {
                throw new Error(
                    "Can't place ship here, collides with another."
                );
            }
            axis = 'X' ? cordTwo++ : cordOne++;
        }
    };

    const placeShip = (shipLength, cord, axis) => {
        let [cordOne, cordTwo] = [...cord];
        ////minus 1 for cord so value is equal index in array
        //that way, inputs easier to understand imo
        //'1,1' , row 1 spot 1 '3,5', row 3 spot 5 etc.
        let adjCordOne = cordOne - 1;
        let adjCordTwo = cordTwo - 1;

        checkPlacement(shipLength, adjCordOne, adjCordTwo, axis);

        for (var i = 0; i < shipLength; i++) {
            boardState[adjCordOne][adjCordTwo] = 'O';
            axis = 'X' ? adjCordTwo++ : adjCordOne++;
        }
    };

    const board = { boardState: boardState, placeShip };

    return board;
};

export default boardFactory;
