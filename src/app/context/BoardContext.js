
import React, {createContext, useEffect, useState} from 'react';

// window parameters:
function getWindowDimensions() { // get dimensions of the window, used later to set the number of cells
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}



//define board Context
export const BoardContext = createContext();

const BoardContextProvider = (props) => {
    // define window dimensions function
    const { height, width } = getWindowDimensions();

    // default board parameters:
    const cellSize = 20; // cells size in px
    const [boardProps, setBoardProps] = useState({ // board - cells parameters
        cellSize,
        cols: Math.floor(width/(cellSize + 2)), // get number of cells - per column
        rows: Math.floor(height/(cellSize + 2)) // get number of cells - per row
    });

    // board state
    const filledBoard = new Array(boardProps.cols*boardProps.rows).fill(false); // filled board template array -default state false since no cell should be active
    const [board, setBoard] = useState(filledBoard);
    

    return ( 
        <BoardContext.Provider value={{boardProps,board, setBoard}} >
            {props.children} 
        </BoardContext.Provider>
     );
}

export default BoardContextProvider;