import React from "react";
import "../css/Ships.css";

const Carrier = () => (
  <div className="ship">
    <div className="ship-body">
      {Array(5)
        .fill()
        .map((_, i) => (
          <div
            key={i}
            className="ship-square"
            style={{ backgroundColor: "#1e90ff" }}
          ></div>
        ))}
    </div>
  </div>
);

const Battleship = () => (
  <div className="ship">
    <div className="ship-body">
      {Array(4)
        .fill()
        .map((_, i) => (
          <div
            key={i}
            className="ship-square"
            style={{ backgroundColor: "#4682b4" }}
          ></div>
        ))}
    </div>
  </div>
);

const Cruiser = () => (
  <div className="ship">
    <div className="ship-body">
      {Array(3)
        .fill()
        .map((_, i) => (
          <div
            key={i}
            className="ship-square"
            style={{ backgroundColor: "#6495ed" }}
          ></div>
        ))}
    </div>
  </div>
);

const Submarine = () => (
  <div className="ship">
    <div className="ship-body">
      {Array(3)
        .fill()
        .map((_, i) => (
          <div
            key={i}
            className="ship-square"
            style={{ backgroundColor: "#4169e1" }}
          ></div>
        ))}
    </div>
  </div>
);

const Destroyer = () => (
  <div className="ship">
    <div className="ship-body">
      {Array(2)
        .fill()
        .map((_, i) => (
          <div
            key={i}
            className="ship-square"
            style={{ backgroundColor: "#87ceeb" }}
          ></div>
        ))}
    </div>
  </div>
);

const TypesOfShips = () => (
  <div className="types-of-ships">
    <h2>Types of Ships</h2>
    <Carrier />
    <Battleship />
    <Cruiser />
    <Submarine />
    <Destroyer />
  </div>
);

export { Carrier, Battleship, Cruiser, Submarine, Destroyer };
export default TypesOfShips;