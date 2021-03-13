const randomNumberGen = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomCordGen = () => {
    const cordOne = randomNumberGen(1, 8);
    const cordTwo = randomNumberGen(1, 8);

    return [cordOne, cordTwo];
};

const randomAxis = () => {
    const ran = randomNumberGen(0, 1);
    if (ran === 0) {
        return 'X';
    } else if (ran === 1) {
        return 'Y';
    }
};

const attackBoardRandomly = (attackingPlayer, targetPlayer) => {
    //random cord
    let cord = randomCordGen();
    //indexes of random cord
    let [cordOne, cordTwo] = cord;
    //makes sure cord is a legal spot to attack
    //spot has to be 'O' or 'W'
    while (
        targetPlayer.board.boardState[cordOne - 1][cordTwo - 1] === 'H' ||
        targetPlayer.board.boardState[cordOne - 1][cordTwo - 1] === 'M'
    ) {
        cord = randomCordGen();
        [cordOne, cordTwo] = cord;
    }
    //use valid cord to attack enemy board
    attackingPlayer.attack(targetPlayer, cord);
};

const fillBoardRandomly = (player) => {
    //ships body defaults to '' so it only changes if successful placement
    //carrier
    while (player.ships['carrier'].body[0].cord === '') {
        try {
            player.placeMyShip(
                player.ships['carrier'],
                randomCordGen(),
                randomAxis()
            );
        } catch (e) {
            continue;
        }
    }
    //battleship
    while (player.ships['battleship'].body[0].cord === '') {
        try {
            player.placeMyShip(
                player.ships['battleship'],
                randomCordGen(),
                randomAxis()
            );
        } catch (e) {
            continue;
        }
    }
    //cruiser
    while (player.ships['cruiser'].body[0].cord === '') {
        try {
            player.placeMyShip(
                player.ships['cruiser'],
                randomCordGen(),
                randomAxis()
            );
        } catch (e) {
            continue;
        }
    }
    //Submarine
    while (player.ships['submarine'].body[0].cord === '') {
        try {
            player.placeMyShip(
                player.ships['submarine'],
                randomCordGen(),
                randomAxis()
            );
        } catch (e) {
            continue;
        }
    }
    //destroyer
    while (player.ships['destroyer'].body[0].cord === '') {
        try {
            player.placeMyShip(
                player.ships['destroyer'],
                randomCordGen(),
                randomAxis()
            );
        } catch (e) {
            continue;
        }
    }
};

const rand = {
    randomNumberGen,
    randomCordGen,
    fillBoardRandomly,
    attackBoardRandomly,
};

export default rand;
