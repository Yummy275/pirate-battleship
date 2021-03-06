import React, { useState, useRef } from 'react';
import BoardGrid from '../components/BoardGrid';
import StdButton from '../components/StdButton';
import skull from '../images/skull.png';
import scroll from '../images/home-scroll.png';

const PlacingPage = ({ player }) => {
    const [placingShip, setPlacingShip] = useState(player.ships['carrier']);
    const [axis, setAxis] = useState('X');

    //used to strikeout ship name when done placing ship
    const shipNameOne = useRef();
    const shipNameTwo = useRef();
    const shipNameThr = useRef();
    const shipNameFour = useRef();
    const shipNameFive = useRef();

    //strikes out words in inputed ele
    const strikeOutText = (ele) => {
        ele.current.style.textDecoration = 'line-through';
    };

    const updatePlacingShip = () => {
        if (placingShip.name === 'Carrier') {
            strikeOutText(shipNameOne);
            setPlacingShip(player.ships['battleship']);
        } else if (placingShip.name === 'Battleship') {
            strikeOutText(shipNameTwo);
            setPlacingShip(player.ships['cruiser']);
        } else if (placingShip.name === 'Cruiser') {
            strikeOutText(shipNameThr);
            setPlacingShip(player.ships['submarine']);
        } else if (placingShip.name === 'Submarine') {
            strikeOutText(shipNameFour);
            setPlacingShip(player.ships['destroyer']);
        } else if (placingShip.name === 'Destroyer') {
            strikeOutText(shipNameFive);
            setPlacingShip('done');
        }
    };

    const gridSpotClick = (cord) => {
        try {
            player.placeMyShip(placingShip, cord, axis);
        } catch (err) {
            alert(err);
            console.log(player.board.boardState);
            console.log(player.ships);
            return;
        }
        updatePlacingShip();
        console.log(player.board.boardState);
        console.log(player.ships);
    };

    const xAxisHandleClick = () => {
        setAxis('X');
    };

    const yAxisHandleClick = () => {
        setAxis('Y');
    };

    return (
        <div
            className="h-screen bg-center"
            style={{
                minHeight: '100vh',
                backgroundImage: `url(${skull})`,
                backgroundSize: '20%',
            }}
        >
            <div className="text-center text-3xl pb-1 bg-red-700">
                Place Ships
            </div>
            <div
                style={{ backgroundSize: '12.5% 12.5%', opacity: '.8' }}
                className="h-4/6 w-5/6 mt-3 mx-auto bg-water-tile my-grid-border"
            >
                <BoardGrid
                    boardState={player.board.boardState}
                    gridSpotClick={gridSpotClick}
                ></BoardGrid>
            </div>
            <div className="flex justify-evenly text-red-700">
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
            <div className="relative flex justify-center items-center">
                <img
                    src={scroll}
                    alt="scroll-img"
                    className="w-full h-36"
                ></img>
                <div className="absolute w-44 sm:w-64 text-sm sm:text-lg flex flex-wrap justify-around">
                    <div
                        ref={shipNameOne}
                        className={`mx-1 ${
                            placingShip.name === 'Carrier' ? 'text-red-700' : ''
                        }`}
                    >
                        Carrier
                    </div>
                    <div
                        ref={shipNameTwo}
                        className={`mx-1 ${
                            placingShip.name === 'Battleship'
                                ? 'text-red-700'
                                : ''
                        }`}
                    >
                        Battleship
                    </div>
                    <div
                        ref={shipNameThr}
                        className={`mx-1 ${
                            placingShip.name === 'Cruiser' ? 'text-red-700' : ''
                        }`}
                    >
                        Cruiser
                    </div>
                    <div
                        ref={shipNameFour}
                        className={`mx-1 ${
                            placingShip.name === 'Submarine'
                                ? 'text-red-700'
                                : ''
                        }`}
                    >
                        Submarine
                    </div>
                    <div
                        ref={shipNameFive}
                        className={`mx-1 ${
                            placingShip.name === 'Destroyer'
                                ? 'text-red-700'
                                : ''
                        }`}
                    >
                        Destroyer
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlacingPage;
