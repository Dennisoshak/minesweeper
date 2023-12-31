import React, { useEffect, useState } from "react";
import { Shake } from "reshake";
import { calculateNeighbours } from "./utils";
import Cell from "./Cell";

const Board = () => {
  const [cells, setCells] = useState([]);
  const [status, setStatus] = useState("");
  const [flagCount, setFlagCount] = useState(10);
  const [count, setCount] = useState(0);
  const [shake, setShake] = useState(false);
  const fillCells = () => {
    const tempCells = [];
    for (let i = 0; i < 9; i++) {
      tempCells.push({
        index: i,
        isFlagged: false,
        isBomb: true,
        neighbour: 0,
      });
    }
    for (let i = 9; i < 64; i++) {
      tempCells.push({
        index: i,
        isFlagged: false,
        isBomb: false,
        neighbour: 0,
      });
    }
    const shuffledArray = tempCells.sort((a, b) => 0.5 - Math.random());
    const newCells = calculateNeighbours(shuffledArray);
    setCells(newCells);
  };

  useEffect(() => {
    fillCells();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    count === 54 && setStatus("Well done!");
  }, [count]);

  useEffect(() => {
    status === "Game over" && setShake(true);
    const timeOut = setTimeout(() => {
      setShake(false);
    }, 300);
    return () => clearTimeout(timeOut);
  }, [status]);

  return (
    <Shake
      h={5}
      v={5}
      r={3}
      dur={300}
      int={10}
      max={100}
      fixed={false}
      active={shake}
      fixedStop={false}
      freez={false}
    >
      <div className="board">
        <h1 style={{ textAlign: "center" }}>Minesweeper</h1>
        <div style={{ textAlign: "center", height: "2rem" }}>
          <h2 style={{ color: "#8b1515" }}>{status}</h2>
        </div>
        <h3 style={{ marginLeft: "2rem" }}>
          Flags: {flagCount}
          <span style={{ marginLeft: "1rem" }}> Bombs:10</span>
        </h3>
        {status && (
          <h3
            onClick={() => {
              window.location.reload();
            }}
            style={{ textAlign: "center", cursor: "pointer" }}
          >
            {"Restart"}
          </h3>
        )}

        <div className="board-container">
          {cells.map((cell, i) => (
            <div key={i} className="cell">
              <Cell
                cell={cell}
                setStatus={setStatus}
                status={status}
                setFlagCount={setFlagCount}
                setCount={setCount}
              />
            </div>
          ))}
        </div>
      </div>
    </Shake>
  );
};

export default Board;
