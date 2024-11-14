import React from "react";
import TypesOfShips, { Battleship, Carrier, Cruiser, Destroyer, Submarine } from "./TypesOfShips";
import "../css/style.css";

function AboutGame() {
  return (
    <div className="aboutgame">
      <section id="about" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="50">
              <div className="section-title">
                <h1 className="display-4 fw-semibold">About Game</h1>
                <div className="line"></div>
                <p>
                  Battleship is a two-player war-themed board game where opponents try to guess the location of each other's warships and then sink them.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6" data-aos="fade-down" data-aos-delay="50">
              <div className="battleship_board">
                <h1>Game Board</h1>
                <p>
                  The Battleship Game Board is a 10x10 grid where each cell represents a unique coordinate.
                </p>
              </div>
            </div>
            <div data-aos="fade-down" data-aos-delay="150" className="col-lg-5">
              <h1>Types Of Ships</h1>
              <p className="mt-3 mb-4">There are 5 types of ships available in this game:</p>
              <div className="d-flex pt-4 mb-3">
                <h5>Carrier</h5> <Carrier />
                <p>The largest ship in the fleet.</p>
              </div>
              <div className="d-flex mb-3">
                <h5>Battleship</h5> <Battleship />
                <p>A heavily armed and armored ship.</p>
              </div>
              <div className="d-flex">
                <h5>Cruiser</h5>
                <Cruiser />
                <p>A versatile mid-sized ship.</p>
              </div>
              <div className="d-flex">
                <h5>Submarine</h5>
                <Submarine />
                <p>A stealthy, smaller vessel.</p>
              </div>
              <div className="d-flex">
                <h5>Destroyer</h5>
                <Destroyer />
                <p>A small, fast, and agile ship.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutGame;
