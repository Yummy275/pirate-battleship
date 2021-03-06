import boardFactory from './board';
import shipFactory from './ship';

const playerFactory = (name) => {
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
            axis === 'X' ? cordTwo++ : cordOne++;
        }
    };

    const shipHitCheck = (ship, cord) => {
        for (const bodyPart of ship.body) {
            if (JSON.stringify(bodyPart.cord) === JSON.stringify(cord)) {
                bodyPart.hitMarker = true;
                break;
            }
        }
    };

    const shipsDeadCheck = () => {
        let theyAllDead = true;
        for (var i = 0; i < ships.length; i++) {
            if (ships[i].checkForDeath() === false) {
                theyAllDead = false;
                break;
            }
        }
        return theyAllDead;
    };

    const attackBoard = (targetBoard, cord) => {
        targetBoard.recieveAttack(cord);
        //marks ship in ships as hit if located at target cord
        shipHitCheck(ships['carrier'], cord);
    };

    const player = {
        name: name,
        board: board,
        ships: ships,
        placeMyShip,
        attackBoard,
        shipsDeadCheck,
    };

    return player;
};

export default playerFactory;
