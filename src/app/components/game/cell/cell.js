import React, {useState, useContext,useEffect} from 'react';
import {GameContext} from "../../../context/GameContext"

const Cell = (props) => {
    const {boardProps,board, setBoard} = useContext(GameContext);
    
    // Cell style parameters:
    const cellBase = {
        width: boardProps.cellSize + "px",
        height: boardProps.cellSize + "px",
        cursor: "pointer",
    }

    const [cellStyle, setCellStyle] = useState(board[props.cellId] === true ?({backgroundColor: "#FFDDD3"}):({backgroundColor: "#5EA9BE"}));
    
    useEffect(() => { // update cell style when board-cell state change
        setCellStyle(board[props.cellId] === true ? ({backgroundColor: "#FFDDD3"}):({backgroundColor: "#5EA9BE"}));
    },[board])

    const cellOnClick = () =>{ // change board-cell state 
        let boardCells = [...board];
        boardCells[props.cellId] = !boardCells[props.cellId];
        setBoard(boardCells);
    }

    return ( 
            <div style={Object.assign(cellBase, cellStyle)} onClick={()=>{cellOnClick()}}> </div>
     );
}
 
export default Cell;