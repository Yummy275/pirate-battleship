import React from 'react';
import StdButton from '../components/StdButton';
import pirateSkullImg from '../images/skull.png';
import scrollImg from '../images/home-scroll.png';
import water from '../images/home-water.png';
import playerFactory from '../game/player';

const classes = {
    container: `min-h-screen flex flex-col items-center`,
    headerContainer: `w-full flex items-center justify-center relative`,
    scrollImg: `h-40 w-full`,
    title: `absolute text-2xl md:text-4xl text-red-700`,
    buttonsContainerOuter: `w-full flex items-center justify-center relative`,
    buttonsContainerInner: `absolute flex flex-wrap justify-center items-center`,
    waterImg: `fixed bottom-0 w-full h-1/5`,
};

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
        <div className={classes.container}>
            <div
                className={classes.headerContainer}
                style={{ maxWidth: '40rem' }}
            >
                <img
                    className={classes.scrollImg}
                    alt="scroll"
                    src={scrollImg}
                ></img>
                <div className={classes.title}>PIRATESHIPS</div>
            </div>
            <div className={classes.buttonsContainerOuter}>
                <img
                    alt="skull"
                    style={{ maxWidth: '30rem' }}
                    className="w-full"
                    src={pirateSkullImg}
                ></img>
                <div className={classes.buttonsContainerInner}>
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
                className={classes.waterImg}
                src={water}
                alt="water"
            ></img>
        </div>
    );
};

export default HomePage;
