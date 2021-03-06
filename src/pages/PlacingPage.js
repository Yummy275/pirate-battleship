import React, { useState } from 'react';
import BoardGrid from '../components/BoardGrid';
import StdButton from '../components/StdButton';
import skull from '../images/skull.png';
import scroll from '../images/home-scroll.png';

const PlacingPage = ({ player }) => {
    const [placingShip, setPlacingShip] = useState(player.ships[0]);
    const [axis, setAxis] = useState('X');

    const gridSpotClick = (cord) => {
        //try {
        //    player.placeMyShip(placingShip, cord, );
        // }
        console.log(cord);
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
                <BoardGrid gridSpotClick={gridSpotClick}></BoardGrid>
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
                    <div className="mx-1">Carrier</div>
                    <div className="mx-1">Battleship</div>
                    <div className="mx-1">Cruiser</div>
                    <div className="mx-1">Submarine</div>
                    <div className="mx-1">Destoryer</div>
                </div>
            </div>
        </div>
    );
};

export default PlacingPage;
