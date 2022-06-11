import logo from "./logo.svg";
import "./App.css";
import Map from "./Components/Map";
import {
  connections,
  map,
  quantumComponents,
  planetLocations,
} from "./Components/Data";
import { useState, useEffect } from "react";
import QuantumComponent from "./Components/QuantumComponent";

function App() {
  const [bluePlayer, setBluePlayer] = useState({
    engineCards: [],
    quantumEvents: [],
    position: 0,
    entanglionDie: -1,
    centariousDie: -1,
  });

  const [redPlayer, setRedPlayer] = useState({
    engineCards: [],
    quantumEvents: [],
    position: 0,
    entanglionDie: -1,
    centariousDie: -1,
  });

  const [gameState, seteGameState] = useState({
    start: false,
    detectionRate: 1,
    blueTurn: true,
  });

  const [engineStack, setEnginestack] = useState([]);
  const [quantumEvents, setQuantumEvents] = useState([]);
  const [entanglionActive, setEntanglionActive] = useState(true);
  const [centariousActive, setCentariousActive] = useState(false);
  const [quantumC, setQuantumC] = useState(quantumComponents);

  // useEffect(() => {

  // }, []);
  return (
    <>
      <div className="App">
        <nav
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "20px",
          }}
        >
          <p>
            {gameState.start
              ? gameState.blueTurn
                ? "It is Blue Player's turn"
                : "It is Red Player's turn "
              : ""}
          </p>
          <button
            disabled={gameState.start}
            onClick={() => {
              startGame();
            }}
          >
            Start Game
          </button>
          <button
            disabled={!entanglionActive}
            onClick={() => {
              var temp = Math.floor(Math.random() * 11);
              alert("Rolling output: " + temp);
              gameState.blueTurn
                ? setBluePlayer({
                    ...bluePlayer,
                    entanglionDie: temp,
                  })
                : setRedPlayer({ ...redPlayer, entanglionDie: temp });

              seteGameState({ ...gameState, blueTurn: !gameState.blueTurn });
              if (
                (!gameState.start && redPlayer.entanglionDie != -1) ||
                bluePlayer.entanglionDie != -1
              ) {
                setEntanglionActive(false);
                alert(
                  `Its ${
                    temp > bluePlayer.entanglionDie ? "Reds" : "Blues"
                  } turn`
                );
                if (temp > bluePlayer.entanglionDie) {
                  seteGameState({ ...gameState, blueTurn: false });
                } else {
                  seteGameState({ ...gameState, blueTurn: true });
                }
              }
            }}
          >
            {" "}
            Roll Entanglion Die
          </button>
          <button
            disabled={centariousActive}
            onClick={() => {
              var temp = Math.floor(Math.random() * 2);
              alert("Rolling output: " + temp);
              gameState.blueTurn
                ? setBluePlayer({
                    ...bluePlayer,
                    centariousDie: temp,
                  })
                : setRedPlayer({ ...redPlayer, centariousDie: temp });

              seteGameState({ ...gameState, blueTurn: !gameState.blueTurn });
            }}
          >
            {" "}
            Roll Centarious Die
          </button>
        </nav>
        {gameState.start
          ? quantumC.map((c, i) => (
              <QuantumComponent
                value={c}
                xlocation={planetLocations[i][0]}
                ylocation={planetLocations[i][1]}
              />
            ))
          : ""}

        <div
          class="redTag"
          style={{
            left: `${map[redPlayer.position][0]}%`,
            top: `${map[redPlayer.position][1] - 2}%`,
          }}
        ></div>

        <div
          class="blueTag"
          style={{
            left: `${map[bluePlayer.position][0]}%`,
            top: `${map[bluePlayer.position][1]}%`,
          }}
        ></div>
      </div>
    </>
  );

  function startGame() {
    if (bluePlayer.entanglionDie == -1 || redPlayer.entanglionDie == -1) {
      alert("Both Players must roll the entanglion dice to start the game");
    } else {
      if (bluePlayer.entanglionDie > redPlayer.entanglionDie) {
        seteGameState({ ...gameState, blueTurn: true });
      } else {
        seteGameState({ ...gameState, blueTurn: false });
      }
      if (bluePlayer.centariousDie == -1 || redPlayer.centariousDie == -1) {
        alert("Both Players must roll the centarious dice to start the game");
      } else {
        bluePlayer.centariousDie == 0
          ? setBluePlayer({ ...bluePlayer, position: 9 })
          : setBluePlayer({ ...bluePlayer, position: 8 });
        redPlayer.centariousDie == 0
          ? setRedPlayer({ ...redPlayer, position: 9 })
          : setRedPlayer({ ...redPlayer, position: 8 });
        initialiseGame();
        seteGameState({ ...gameState, start: true });
      }
    }
  }
  function playTurn() {}
  function initialiseQuantumEvents(s) {
    quantumEvents.push(s);
    setQuantumEvents([...quantumEvents]);
  }
  function initialiseEngineStack(n, s) {
    var engineTemp = [];
    for (var i = 1; i <= n; i++) {
      engineStack.push(s);
    }

    setEnginestack([...engineStack]);
  }

  function initialiseGame() {
    initialiseEngineStack(8, "h");
    initialiseEngineStack(7, "cnot");
    initialiseEngineStack(5, "x");
    initialiseEngineStack(3, "swap");
    setEnginestack(shuffle(engineStack));
    initialiseEngineStack(1, "prope");

    setQuantumC(shuffle(quantumC)); //.splice(3, 0, "Quantum Shuffle")

    initialiseQuantumEvents("The Mechanic");
    initialiseQuantumEvents("Quantum Tunnel");
    initialiseQuantumEvents("The Bennett");
    initialiseQuantumEvents("The Heisenberg");
    initialiseQuantumEvents("Bit Flip Error");
    initialiseQuantumEvents("Wave Function Collapse");
    initialiseQuantumEvents("Schrodlinger");
    initialiseQuantumEvents("Spooky Action");
    var x = shuffle(quantumEvents);
    x.splice(3, 0, "Quantum Shuffle");
    setQuantumEvents(x);
    console.log(quantumEvents);
  }

  function shuffleEngineStack() {
    initialiseEngineStack(8, "h");
    initialiseEngineStack(7, "cnot");
    initialiseEngineStack(5, "x");
    initialiseEngineStack(3, "swap");
    initialiseEngineStack(1, "prope");
    setEnginestack(shuffle(engineStack));
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}

export default App;
