import React from 'react';
import StdButton from '../components/StdButton';
import pirateshipImg from '../images/home-pirateship.png';
import water from '../images/home-water.png';

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className="h-64 w-72 text-3xl text-red-700 pt-2 bg-home-scroll bg-contain">
                PIRATESHIPS
            </div>
            <img
                className="w-4/5 h-52 mt-4"
                src={pirateshipImg}
                alt="pirateship"
            ></img>
            <div className="mt-5 flex flex-wrap justify-center">
                <StdButton string="Play vs Cpu"></StdButton>
                <StdButton string="Play vs Human"></StdButton>
            </div>
            <img src={water} alt="water"></img>
        </div>
    );
};

export default HomePage;
