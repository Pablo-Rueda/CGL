import React, {useContext, useEffect} from 'react';
import Cell from "./../cell/cell"
import {GameContext} from "../../../context/GameContext"





const Board = () => {
    const {board, boardProps} = useContext(GameContext);

    // style board:
    const boardStyle = { // style the board
        display:"grid",
        gridTemplateColumns:"repeat(" + boardProps.cols + ", 1fr)",
        gridTemplateRows: "repeat(" + boardProps.rows + ", 1fr)",
        gridGap: "1px",
        maxWidth:"100vw",
        heigth: "100%",
        backgroundColor:"#9ACDE0"
    };
    let cellId = board.length; // track the cell ID based on the total abount of cells = board length

    return ( 
        <div style={boardStyle}>
            {board.map(cells =>{ 
                cellId -=1;
                return(<Cell key={cellId} cellId={cellId} />)
            })}
        </div>
     );
}
 
export default Board;