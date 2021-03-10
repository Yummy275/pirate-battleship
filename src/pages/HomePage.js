import React from 'react';
import StdButton from '../components/StdButton';
import pirateSkullImg from '../images/skull.png';
import scrollImg from '../images/home-scroll.png';
import water from '../images/home-water.png';
import playerFactory from '../game/player';

const HomePage = ({ placingStart, setVsCpu }) => {
    const onePlayerClick = () => {
        setVsCpu(true);
        const playerOne = playerFactory('Player One');
        const playerTwo = playerFactory('Player Two');
        placingStart(playerOne, playerTwo);
    };

    const twoPlayerClick = () => {
        setVsCpu(false);
        const playerOne = playerFactory('Player One');
        const playerTwo = playerFactory('Player Two');
        placingStart(playerOne, playerTwo);
    };

    return (
        <div className="min-h-screen flex flex-col items-center">
            <div
                style={{ maxWidth: '40rem' }}
                className="w-full flex items-center justify-center relative"
            >
                <img alt="scroll" src={scrollImg} className="h-40 w-full"></img>
                <div className="absolute text-2xl md:text-4xl text-red-700">
                    PIRATESHIPS
                </div>
            </div>
            <div className="w-full flex items-center justify-center relative">
                <img
                    alt="skull"
                    style={{ maxWidth: '30rem' }}
                    className="w-full"
                    src={pirateSkullImg}
                ></img>
                <div className="absolute flex flex-wrap justify-center items-center">
                    <StdButton
                        string="1 Player"
                        textSize="text-xl"
                        handleClick={onePlayerClick}
                    ></StdButton>
                    <StdButton
                        string="2 Player"
                        textSize="text-xl"
                        handleClick={twoPlayerClick}
                    ></StdButton>
                </div>
            </div>
            <img
                style={{ maxHeight: '5rem' }}
                className="fixed bottom-0 w-full h-1/5"
                src={water}
                alt="water"
            ></img>
        </div>
    );
};

export default HomePage;
