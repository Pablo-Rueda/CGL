import React, {useContext} from 'react';
import Cell from "./../cell/cell"
import {BoardContext} from "../../../context/BoardContext"





const Board = () => {
    const {board,boardProps} = useContext(BoardContext);

    // style board:
    const boardStyle = {
        display:"grid",
        gridTemplateColumns:"repeat(" + boardProps.cols + ", 1fr)",
        gridTemplateRows: "repeat(" + boardProps.rows + ", 1fr)",
        gridGap: "1px",
        maxWidth:"100vw",
        heigth: "100%"
    };
    return ( 
        <div style={boardStyle}>
            {board.map(cells =>{
                return(<Cell />)
            })}
        </div>
     );
}
 
export default Board;