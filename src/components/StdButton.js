import React from 'react';

const StdButton = ({ string }) => {
    return (
        <button className="w-36 h-16 text-lg p-2 mx-4 my-2 bg-red-200 rounded">
            {string}
        </button>
    );
};

export default StdButton;
