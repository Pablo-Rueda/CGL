
import React, {createContext, useState} from 'react';

// window parameters:
function getWindowDimensions() { // get dimensions of the window, used later to set the number of cells
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}



//define board Context
export const GameContext = createContext();

const GameContextProvider = (props) => {
    // define window dimensions function
    const { height, width } = getWindowDimensions();

    // default board parameters:
    const cellSize = 15; // cells size in px
    const [boardProps, setBoardProps] = useState({ // board - cells parameters
        cellSize,
        cols: Math.floor(width/(cellSize + 2)), // get number of cells - per column
        rows: Math.floor(height/(cellSize + 2)) // get number of cells - per row
    });

    // board state
    const filledBoard = new Array(boardProps.cols*boardProps.rows).fill(false); // filled board template array -default state false since no cell should be active
    const [board, setBoard] = useState(filledBoard);
    
    // time state
    const [time, setTime] = useState(false);

    const nextFrame = () =>{ // function to run the game.
        let updateBoard = []
        for(let i = 0; i<board.length; i++){
            let cellValue = (
                ( (board[i - boardProps.cols - 1] !== undefined && board[i - boardProps.cols - 1] ) ? 1 : 0) +
                (board[i - boardProps.cols] !== undefined ? (board[i - boardProps.cols] ? 1 : 0) : 0) +
                (board[i - boardProps.cols + 1] !== undefined ? (board[i - boardProps.cols + 1] ? 1 : 0) : 0) +
                (board[i - 1] !== undefined ? (board[i - 1] ? 1 : 0) : 0) +
                (board[i + 1] !== undefined ? (board[i + 1] ? 1 : 0) : 0) +
                (board[i + boardProps.cols - 1] !== undefined ? (board[i + boardProps.cols - 1] ? 1 : 0) : 0) +
                (board[i + boardProps.cols] !== undefined ? (board[i + boardProps.cols] ? 1 : 0) : 0) +
                (board[i + boardProps.cols + 1] !== undefined ? (board[i + boardProps.cols + 1] ? 1 : 0) : 0)
            );
            if( (board[i] === true && (cellValue ===2 || cellValue ===3)  ) || // rule 1: if cell alive, and 2-3 near cells. It stays alive
                (board[i] === false) && cellValue === 3 ){ // rule 2: if cell dead and 3 near alive, it gets alive
                    updateBoard.push(true);
                }else{ // rule 3: the remaining will die
                    updateBoard.push(false);
                }
        }
        return(updateBoard);
    }

    
    const resetBoard = () => {
        let boardCells = new Array(board.length).fill(false);
        setBoard(boardCells);
    }



    return ( 
        <GameContext.Provider value={{boardProps,board,time,setTime, setBoard,nextFrame, resetBoard}} >
            {props.children} 
        </GameContext.Provider>
     );
}

export default GameContextProvider;