// // PlayerBoard.js

// import React, { useState, useEffect } from 'react';
// import './BattleshipGame.css';

// // Ship types and their sizes
// const shipsConfig = [
//   { name: 'Carrier', size: 5 },
//   { name: 'Battleship', size: 4 },
//   { name: 'Cruiser', size: 3 },
//   { name: 'Submarine', size: 3 },
//   { name: 'Destroyer', size: 2 }
// ];

// // Function to randomly place ships on a 10x10 grid
// const placeShips = () => {
//   const board = Array.from({ length: 10 }, () => Array(10).fill("unmarked"));

//   shipsConfig.forEach(({ size }) => {
//     let placed = false;
//     while (!placed) {
//       const isVertical = Math.random() < 0.5;
//       const row = Math.floor(Math.random() * (isVertical ? 10 - size : 10));
//       const col = Math.floor(Math.random() * (isVertical ? 10 : 10 - size));

//       let canPlace = true;
//       for (let i = 0; i < size; i++) {
//         if (board[row + (isVertical ? i : 0)][col + (isVertical ? 0 : i)] !== "unmarked") {
//           canPlace = false;
//           break;
//         }
//       }

//       if (canPlace) {
//         for (let i = 0; i < size; i++) {
//           board[row + (isVertical ? i : 0)][col + (isVertical ? 0 : i)] = "ship";
//         }
//         placed = true;
//       }
//     }
//   });

//   return board;
// };

// // Common hook to simulate gameplay for each player's board
// const useSimulateGameplay = (initialBoard) => {
//   const [board, setBoard] = useState(initialBoard);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newBoard = board.map((row, rowIndex) =>
//         row.map((cell, colIndex) => {
//           if (cell !== "hit" && cell !== "miss") {
//             const isHitAttempt = Math.random() < 0.1;
//             if (isHitAttempt) {
//               if (cell === "ship") return "hit"; // Hit a ship
//               if (cell === "unmarked") return "miss"; // Miss
//             }
//           }
//           return cell;
//         })
//       );
//       setBoard(newBoard);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [board]);

//   return board;
// };

// // Player 1 Board Component
// export const Player1Board = () => {
//   const initialBoard = placeShips();
//   const board = useSimulateGameplay(initialBoard);

//   return (
//     <div className="appleBoard">
//       <h3>Player 1</h3>
//       <div className="appleGrid">
//         {board.map((row, rowIndex) =>
//           row.map((cell, colIndex) => (
//             <div
//               key={`apple-${rowIndex}-${colIndex}`}
//               className={`appleCell ${cell}`}
//             >
//               {cell === "hit" ? "X" : ""}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// // Player 2 Board Component
// export const Player2Board = () => {
//   const initialBoard = placeShips();
//   const board = useSimulateGameplay(initialBoard);

//   return (
//     <div className="bananaBoard">
//       <h3>Player 2</h3>
//       <div className="bananaGrid">
//         {board.map((row, rowIndex) =>
//           row.map((cell, colIndex) => (
//             <div
//               key={`banana-${rowIndex}-${colIndex}`}
//               className={`bananaCell ${cell}`}
//             >
//               {cell === "hit" ? "X" : ""}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };
