import React from 'react';

const StdButton = ({ string }) => {
    return (
        <button className="w-36 text-lg p-2 my-2 bg-red-200 rounded ">
            {string}
        </button>
    );
};

export default StdButton;
