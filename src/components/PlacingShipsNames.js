import React, { useEffect, useRef } from 'react';

const classes = {
    shipName: (placingShip, shipName) =>
        `mx-1 ${placingShip.name === shipName ? 'text-red-700' : ''}`,
};

const PlacingShipsNames = ({ placingShip }) => {
    const shipNameOne = useRef();
    const shipNameTwo = useRef();
    const shipNameThr = useRef();
    const shipNameFour = useRef();
    const shipNameFive = useRef();

    //resets all the words to not be striked out
    const resetStrikeOutText = () => {
        shipNameOne.current.style.textDecoration = 'none';
        shipNameTwo.current.style.textDecoration = 'none';
        shipNameThr.current.style.textDecoration = 'none';
        shipNameFour.current.style.textDecoration = 'none';
        shipNameFive.current.style.textDecoration = 'none';
    };

    useEffect(() => {
        if (placingShip.name === 'Carrier') {
            resetStrikeOutText();
        } else if (placingShip.name === 'Battleship') {
            shipNameOne.current.style.textDecoration = 'line-through';
        } else if (placingShip.name === 'Cruiser') {
            shipNameTwo.current.style.textDecoration = 'line-through';
        } else if (placingShip.name === 'Submarine') {
            shipNameThr.current.style.textDecoration = 'line-through';
        } else if (placingShip.name === 'Destroyer') {
            shipNameFour.current.style.textDecoration = 'line-through';
        } else if (placingShip === 'done') {
            shipNameFive.current.style.textDecoration = 'line-through';
        }
    });

    return (
        <>
            <div
                ref={shipNameOne}
                className={classes.shipName(placingShip, 'Carrier')}
            >
                Carrier
            </div>
            <div
                ref={shipNameTwo}
                className={classes.shipName(placingShip, 'Battleship')}
            >
                Battleship
            </div>
            <div
                ref={shipNameThr}
                className={classes.shipName(placingShip, 'Cruiser')}
            >
                Cruiser
            </div>
            <div
                ref={shipNameFour}
                className={classes.shipName(placingShip, 'Submarine')}
            >
                Submarine
            </div>
            <div
                ref={shipNameFive}
                className={classes.shipName(placingShip, 'Destroyer')}
            >
                Destroyer
            </div>
        </>
    );
};

export default PlacingShipsNames;
