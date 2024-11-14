import "../public/css/style.css";
import TypesOfShips, {
  Battleship,
  Carrier,
  Cruiser,
  Destroyer,
  Submarine,
} from "./TypesOfShips";
import Board from "./Board";
import "../public/css/style2.css";
import { Player1Board, Player2Board } from './PlayerBoard';


function ShipsPlacement() {
  return (
    <section id="setup" className="section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-12 text-center"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            <div className="section-title">
              <h1 className="display-4 fw-semibold">Setting up the Game</h1>
              <div className="line"></div>
              <p>
                Each player receives a game board, five ships of varying lengths
                (each ship has holes to insert the "hit" pegs), and a supply of
                hit and miss markers (white and red pegs).The five ships are:
                Carrier (five holes) Battleship (four holes) Cruiser (three
                holes) Submarine (three holes) Destroyer (two holes) The two
                players should face each other across a game table. Their grids
                back up to one another so that neither player can see his
                opponent's "ocean" and ship locations.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between align-items-center">
          <div data-aos="fade-down" data-aos-delay="150" className="col-lg-5">
            <h1>How To Place Ships on board</h1>
            <p className="mt-3 mb-4">
              Before the game starts, each opponent secretly places his five
              ships on the ocean grid (lower part of the board) by laying out
              the ships and anchoring them into the holes on the grid. Each ship
              must be placed horizontally or vertically across grid spaces—not
              diagonally—and the ships can't hang off the grid. Ships can touch
              each other, but they can't occupy the same grid space. You cannot
              change the position of the ships after the game begins.
            </p>
            <div className="d-flex pt-4 mb-1">
              {/* <div className="iconbox me-4">
                </div> */}
              <div>
                <h5>Carrier</h5> <Carrier />
              </div>
            </div>
            <div className="d-flex mb-0">
              {/* <div className="iconbox me-4">
                  <i className="ri-user-5-fill"></i>
                </div> */}
              <div>
                <h5>Battleship</h5> <Battleship />
              </div>
            </div>
            <div className="d-flex">
              {/* <div className="iconbox me-4">
                  <i className="ri-rocket-2-fill"></i>
                </div> */}
              <div>
                <h5>Cruiser</h5>
                <Cruiser />
              </div>
            </div>
            <div className="d-flex">
              {/* <div className="iconbox me-4">
                  <i className="ri-rocket-2-fill"></i>
                </div> */}
              <div>
                <h5>Submarine</h5>
                <Submarine />
              </div>
            </div>
            <div className="d-flex">
              {/* <div className="iconbox me-4">
                  <i className="ri-rocket-2-fill"></i>
                </div> */}
              <div>
                <h5>Destroyer</h5>
                <Destroyer />
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-down" data-aos-delay="50">

            {/* board */}
            <Board />
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default ShipsPlacement;
