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
    };

    const player = { board: board, ships: ships, placeMyShip };

    return player;
};

export default playerFactory;
