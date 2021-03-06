import React from 'react';

const StdButton = ({ string, textSize, handleClick }) => {
    return (
        <button
            style={{ transition: 'font-size .2s ease' }}
            onClick={handleClick}
            className={`w-36 h-16 ${textSize} p-2 mx-4 my-2 bg-red-200 rounded`}
        >
            {string}
        </button>
    );
};

export default StdButton;
