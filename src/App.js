import React, { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import PlacingPage from './pages/PlacingPage';
import PlayingPage from './pages/PlayingPage';

function App() {
    const [viewPage, setViewPage] = useState('');
    const [vsCpu, setVsCpu] = useState('');
    const [players, setPlayers] = useState([]);

    const placingStart = (playerOne, playerTwo) => {
        const playersObj = { playerOne: playerOne, playerTwo: playerTwo };
        setPlayers(playersObj);
        setViewPage('placing');
    };

    return (
        <div className="App">
            {viewPage === 'placing' ? (
                <PlacingPage
                    player={players['playerOne']}
                    setViewPage={setViewPage}
                    vsCpu={vsCpu}
                ></PlacingPage>
            ) : viewPage === 'placingTwo' ? (
                <PlacingPage
                    player={players['playerTwo']}
                    setViewPage={setViewPage}
                    vsCpu={vsCpu}
                ></PlacingPage>
            ) : viewPage === 'playing' ? (
                <PlayingPage players={players} vsCpu={vsCpu}></PlayingPage>
            ) : (
                <HomePage
                    placingStart={placingStart}
                    setVsCpu={setVsCpu}
                    vsCpu={vsCpu}
                ></HomePage>
            )}
        </div>
    );
}

export default App;
