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

function randomAxis() {
    const ran = randomNumberGen(0, 1);
    if (ran === 0) {
        return 'X';
    } else if (ran === 1) {
        return 'Y';
    }
}

const fillBoardRandomly = (player) => {
    //ships body wont increase unless a succesful placement happens
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

export default { randomNumberGen, randomCordGen, fillBoardRandomly };
