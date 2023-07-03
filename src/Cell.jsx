import React, { useState } from "react";
const bomb = "💣";
const flag = "🚩";

const Cell = ({ cell, setStatus, status, setFlagCount,setCount }) => {
  const [value, setValue] = useState("");
  const handleClick = (e) => {
    if (status === "Game over") return;
    setValue(cell.isBomb ? bomb : cell.neighbour);
    setCount((prev)=>prev+1)
    cell.isBomb && setStatus("Game over");
  };
  const handleFlag = (e) => {
    e.preventDefault();
    if (value !== flag) {
      setValue(flag);
      setFlagCount((prev) => prev - 1);
    } else {
      setValue("");
      setFlagCount((prev) => prev + 1);
    }
  };
  return (
    <div
      style={status === "Game over" ? { pointerEvents: "none" } : {}}
      onClick={(e) => handleClick(e)}
      onContextMenu={(e) => handleFlag(e)}
      className="cell-value"
    >
      {value}
    </div>
  );
};

export default Cell;
