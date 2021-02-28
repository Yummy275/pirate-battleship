import './App.css';
import pirateshipImg from './images/home-pirateship.png';

function App() {
    return (
        <div className="App">
            <div className="text-xl">PIRATESHIPS</div>
            <img
                className="h-12 w-12"
                src={pirateshipImg}
                alt="pirateship"
            ></img>
        </div>
    );
}

export default App;
