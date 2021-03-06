import boardFactory from './board';
import shipFactory from './ship';

const playerFactory = () => {
    const board = boardFactory();

    const carrier = shipFactory('Carrier', 5);
    const battleship = shipFactory('Battleship', 4);
    const cruiser = shipFactory('Cruiser', 3);
    const submarine = shipFactory('Submarine', 3);
    const destroyer = shipFactory('Destroyer', 2);

    const ships = {
        carrier: carrier,
        battleship: battleship,
        cruiser: cruiser,
        submarine: submarine,
        destroyer: destroyer,
    };

    const placeMyShip = (ship, cord, axis) => {
        board.placeShip(ship.body.length, cord, axis);
        let [cordOne, cordTwo] = [...cord];
        for (const spot of ship.body) {
            spot.cord = [cordOne, cordTwo];
            axis = 'X' ? cordTwo++ : cordOne++;
        }
    };

    const shipHitCheck = (cord) => {
        for (var i = 0; i < ships.length; i++) {
            if (ships[i].body.cords.includes(cord)) {
                ships[i].body.hitMarker = true;
            }
        }
    };

    const attackBoard = (targetBoard, cord) => {
        targetBoard.recieveAttack(cord);
        shipHitCheck(cord);
    };

    const player = { board: board, ships: ships, placeMyShip, attackBoard };

    return player;
};

export default playerFactory;
