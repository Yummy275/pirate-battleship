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

    const shipsHitCheck = (cord) => {
        for (const ship in ships) {
            for (const bodyPart of ships[ship].body) {
                if (JSON.stringify(bodyPart.cord) === JSON.stringify(cord)) {
                    bodyPart.hitMarker = true;
                    break;
                }
            }
        }
    };

    const shipsDeadCheck = () => {
        let theyAllDead = true;
        const shipNames = [
            'carrier',
            'battleship',
            'cruiser',
            'submarine',
            'destroyer',
        ];
        for (var i = 0; i < shipNames.length; i++) {
            console.log(i);
            if (ships[shipNames[i]].checkForDeath() === false) {
                theyAllDead = false;
                break;
            }
        }
        return theyAllDead;
    };

    const attack = (targetPlayer, cord) => {
        targetPlayer.board.recieveAttack(cord);
        targetPlayer.shipsHitCheck(cord);
    };

    const player = {
        name: name,
        board: board,
        ships: ships,
        placeMyShip,
        attack,
        shipsHitCheck,
        shipsDeadCheck,
    };

    return player;
};

export default playerFactory;
