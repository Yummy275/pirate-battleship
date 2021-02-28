import React from 'react';
import StdButton from '../components/StdButton';
import pirateshipImg from '../images/home-pirateship.png';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="text-4xl text-red-700 pt-2">PIRATESHIPS</div>
            <img
                className="w-4/5 h-52 mt-4"
                src={pirateshipImg}
                alt="pirateship"
            ></img>
            <div className="mt-5 flex flex-col">
                <StdButton string="Play vs Cpu"></StdButton>
                <StdButton string="Play vs Human"></StdButton>
            </div>
            <div className="w-full h-24 bg-home-water"></div>
        </div>
    );
};

export default HomePage;
