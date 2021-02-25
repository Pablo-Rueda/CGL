import React, {useContext, useEffect} from 'react';
import Cell from "./../cell/cell"
import {GameContext} from "../../../context/GameContext"





const Board = () => {
    const {board,setBoard,time,nextFrame, boardProps, speed} = useContext(GameContext);

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
    
    useEffect(() => { // run time at a board level to run the loop just once (avoid redundancy that would happend at cells level) 
        if(time){// implement timer countdown with useEffect hook
          const timer = setInterval(() => {
            setBoard(nextFrame()) // set board to next frame function
            console.log("run")
          }, speed);
          return () => clearInterval(timer);
        }else{
          const timer = [];
          return () => clearInterval(timer);
        }
      })

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