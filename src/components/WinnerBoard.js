import React from 'react';
import StdButton from '../components/StdButton';

const classes = {
    container: `w-full h-full flex flex-col justify-center items-center text-center bg-indigo-100`,
    winnerText: `text-3xl text-red-700`,
    againText: `text-red-700 my-3`,
};

const WinnerBoard = ({ winnerName, setViewPage }) => {
    const reset = () => {
        setViewPage('');
    };

    return (
        <div className={classes.container}>
            <div className={classes.winnerText}>{winnerName} Wins!</div>
            <div className={classes.againText}>
                Would you like to play more?
            </div>
            <StdButton
                string="New game"
                textSize="text-base"
                handleClick={reset}
            ></StdButton>
        </div>
    );
};

export default WinnerBoard;
