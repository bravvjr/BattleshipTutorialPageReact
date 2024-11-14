import React, { useState, useEffect } from "react";
import "../css/style2.css";
import Ships from "./ships";

function Board() {
  const [board, setBoard] = useState(generateEmptyBoard());
  const [ships, setShips] = useState([
    { name: "carrier", size: 5, coordinates: [] },
    { name: "battleship", size: 4, coordinates: [] },
    { name: "cruiser", size: 3, coordinates: [] },
    { name: "submarine", size: 3, coordinates: [] },
    { name: "destroyer", size: 2, coordinates: [] },
  ]);

  function generateEmptyBoard() {
    return Array(10).fill(null).map(() => Array(10).fill(null));
  }

  const placeShipsRandomly = () => {
    let newBoard = generateEmptyBoard();
    let newShips = [...ships];

    const placeShip = (ship) => {
      let placed = false;
      while (!placed) {
        const orientation = Math.random() > 0.5 ? "horizontal" : "vertical";
        const startX = Math.floor(Math.random() * 10);
        const startY = Math.floor(Math.random() * 10);
        const coordinates = [];

        for (let i = 0; i < ship.size; i++) {
          const x = orientation === "horizontal" ? startX + i : startX;
          const y = orientation === "vertical" ? startY + i : startY;
          if (x >= 10 || y >= 10 || newBoard[y][x]) break;
          coordinates.push({ x, y });
        }

        if (coordinates.length === ship.size) {
          coordinates.forEach(({ x, y }) => (newBoard[y][x] = ship.name));
          placed = true;
          ship.coordinates = coordinates;
        }
      }
    };

    newShips.forEach(placeShip);
    setBoard(newBoard);
    setShips(newShips);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      placeShipsRandomly();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="Section-1">
      <div className="battleship_board2">
        <div className="board-header2">
          <div className="cell2 header2"></div>
          {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map((letter) => (
            <div key={letter} className="cell header2" style={headerStyles}>
              {letter}
            </div>
          ))}
        </div>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row2">
            <div className="cell header2" style={headerStyles}>
              {rowIndex + 1}
            </div>
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`cell2 ${cell || ""}`}
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: cell ? getShipColor(cell) : "rgb(51, 51, 51)",
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const headerStyles = {
  backgroundColor: "#333",
  color: "white",
  fontFamily: "ClashDisplay, sans-serif",
  fontSize: "20px",
  fontWeight: "600",
  textAlign: "center",
};

function getShipColor(shipName) {
  switch (shipName) {
    case "carrier": return "rgb(30, 144, 255)";
    case "battleship": return "rgb(70, 130, 180)";
    case "cruiser": return "rgb(100, 149, 237)";
    case "submarine": return "rgb(65, 105, 225)";
    case "destroyer": return "rgb(135, 206, 235)";
    default: return "white";
  }
}

export default Board;
