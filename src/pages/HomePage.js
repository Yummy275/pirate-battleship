import React from 'react';
import StdButton from '../components/StdButton';
import pirateSkullImg from '../images/skull.png';
import scrollImg from '../images/home-scroll.png';
import water from '../images/home-water.png';

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <div
                style={{ maxWidth: '40rem' }}
                className="w-full flex items-center justify-center relative"
            >
                <img
                    alt="scroll"
                    src={scrollImg}
                    className="h-40 md:h-64 w-full"
                ></img>
                <div className="absolute text-2xl md:text-4xl text-red-700">
                    PIRATESHIPS
                </div>
            </div>
            <div className="w-full flex items-center justify-center relative">
                <img
                    style={{ maxWidth: '30rem' }}
                    className="w-full"
                    src={pirateSkullImg}
                ></img>
                <div className="absolute flex flex-wrap justify-center items-center">
                    <StdButton string="Play vs Cpu"></StdButton>
                    <StdButton string="Play vs Human"></StdButton>
                </div>
            </div>
            <img src={water} alt="water"></img>
        </div>
    );
};

export default HomePage;
