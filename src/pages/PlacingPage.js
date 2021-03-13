import React, { useState, useEffect } from 'react';
import BoardGrid from '../components/BoardGrid';
import StdButton from '../components/StdButton';
import PlacingShipsNames from '../components/PlacingShipsNames';
import skull from '../images/skull.png';
import scroll from '../images/home-scroll.png';
import rand from '../util/random';

const classes = {
    container: `bg-center`,
    headerBar: `text-center text-red-700 text-3xl pb-1 bg-gray-300 bg-opacity-90`,
    boardGridContainer: `w-5/6 mt-3 mx-auto bg-water-tile my-grid-border`,
    doneButton: (placingShip) =>
        `${
            placingShip === 'done' ? 'flex' : 'hidden'
        } justify-center text-red-700`,
    axisButtonsContainer: (placingShip) =>
        `${
            placingShip !== 'done' ? 'flex' : 'hidden'
        } justify-evenly text-red-700`,
    shipNamesContainer: `relative flex justify-center items-center`,
    shipNames: `absolute w-44 sm:w-64 text-sm sm:text-lg flex flex-wrap justify-around`,
};

const PlacingPage = ({ player, setViewPage, vsCpu }) => {
    const [placingShip, setPlacingShip] = useState(player.ships['carrier']);
    const [axis, setAxis] = useState('X');

    useEffect(() => {
        if (player.name === 'Player Two' && vsCpu === true) {
            rand.fillBoardRandomly(player);
            setViewPage('playing');
        }
    });

    useEffect(() => {
        if (player.name === 'Player Two') {
            setPlacingShip(player.ships['carrier']);
        }
    }, [player]);

    const updatePlacingShip = () => {
        if (placingShip.name === 'Carrier') {
            setPlacingShip(player.ships['battleship']);
        } else if (placingShip.name === 'Battleship') {
            setPlacingShip(player.ships['cruiser']);
        } else if (placingShip.name === 'Cruiser') {
            setPlacingShip(player.ships['submarine']);
        } else if (placingShip.name === 'Submarine') {
            setPlacingShip(player.ships['destroyer']);
        } else if (placingShip.name === 'Destroyer') {
            setPlacingShip('done');
        } else if (placingShip === 'done') {
            setPlacingShip(player.ships['carrier']);
        }
    };

    const gridSpotClick = (cord) => {
        try {
            player.placeMyShip(placingShip, cord, axis);
        } catch (err) {
            alert(err);
            return;
        }
        updatePlacingShip();
    };

    const xAxisHandleClick = () => {
        setAxis('X');
    };

    const yAxisHandleClick = () => {
        setAxis('Y');
    };

    const donePlacing = () => {
        if (player.name === 'Player Two') {
            setViewPage('playing');
            updatePlacingShip();
        } else {
            setViewPage('placingTwo');
            updatePlacingShip();
        }
    };

    return (
        <div
            className={classes.container}
            style={{
                minHeight: '100vh',
                backgroundImage: `url(${skull})`,
                backgroundSize: '20%',
            }}
        >
            <div className={classes.headerBar}>{player.name} Place Ships</div>
            <div
                style={{
                    height: '60vh',
                    backgroundSize: '12.5% 12.5%',
                    opacity: '.8',
                }}
                className={classes.boardGridContainer}
            >
                <BoardGrid
                    boardState={player.board.boardState}
                    gridSpotClick={
                        placingShip === 'done' ? 'none' : gridSpotClick
                    }
                ></BoardGrid>
            </div>
            <div className={classes.doneButton(placingShip)}>
                <StdButton
                    textSize="text-xl"
                    string="Ready"
                    handleClick={donePlacing}
                ></StdButton>
            </div>
            <div className={classes.axisButtonsContainer(placingShip)}>
                <StdButton
                    textSize={`${axis === 'X' ? 'text-4xl' : 'text-xl'}`}
                    string="X"
                    handleClick={xAxisHandleClick}
                ></StdButton>
                <StdButton
                    string="Y"
                    textSize={`${axis === 'Y' ? 'text-4xl' : 'text-xl'}`}
                    handleClick={yAxisHandleClick}
                >
                    Y
                </StdButton>
            </div>
            <div className={classes.shipNamesContainer}>
                <img
                    src={scroll}
                    alt="scroll-img"
                    className="w-full h-36"
                ></img>
                <div className={classes.shipNames}>
                    <PlacingShipsNames
                        player={player}
                        placingShip={placingShip}
                        setPlacingShip={setPlacingShip}
                    ></PlacingShipsNames>
                </div>
            </div>
        </div>
    );
};

export default PlacingPage;
