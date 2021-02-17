import React, {useState, useContext} from 'react';
import {BoardContext} from "../../../context/BoardContext"

const Cell = (props) => {
    const {boardProps,board, setBoard} = useContext(BoardContext);
    
    const cellBase = {
        width: boardProps.cellSize + "px",
        height: boardProps.cellSize + "px",
        cursor: "pointer",
    }
 
    
    const [cellStyle, setCellStyle] = useState({backgroundColor: "#5EA9EB"});

    const cellOnClick = () =>{

        setCellStyle(board[props.cellId] === true ? ({backgroundColor: "#5EA9EB"}):({backgroundColor: "#FFDDD3"}));
        let boardCells = [...board];
        boardCells[props.cellId] = !boardCells[props.cellId];
        setBoard(boardCells);
    }

    return ( 
            <div style={Object.assign(cellBase, cellStyle)} onMouseDown={()=>{cellOnClick()}}></div>
     );
}
 
export default Cell;