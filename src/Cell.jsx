import React,{useState} from 'react';
const bomb = "💣";
const flag = '🚩'

const Cell = ({cell,setStatus,status}) => {

  const [value,setValue] = useState('')
const handleClick=(e)=>{
    if (status === 'Game over') return
    if (e.nativeEvent.button === 2){
        console.log('right')
        e.preventDefault()
    }
    setValue(cell.isBomb?bomb:cell.neighbour)
    cell.isBomb && setStatus('Game over')
}
console.log(status)
const handleFlag=(e)=>{
    e.preventDefault()
    value!==flag?setValue(flag): setValue(cell.isBomb?bomb:cell.neighbour)
    cell.isBomb && setStatus('Game over')

}
    return (
        <div  onClick={(e)=>handleClick(e)}onContextMenu={(e)=>handleFlag(e)}className="cell-value">
        {value}
      </div>
    );
}





export default Cell;


