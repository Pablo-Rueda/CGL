
import React, {createContext, useEffect, useState} from 'react';

// window parameters:
function getWindowDimensions() {
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
    const cellSize = 13;
    const [boardProps, setBoardProps] = useState({
        cellSize,
        cols: Math.floor(width/(cellSize + 2)),
        rows: Math.floor(height/(cellSize + 2))
    });

    // board state
    const filledBoard = new Array(boardProps.cols*boardProps.rows).fill(0);
    const [board, setBoard] = useState(filledBoard);
    

    return ( 
        <BoardContext.Provider value={{boardProps,board, setBoard}} >
            {props.children} 
        </BoardContext.Provider>
     );
}

export default BoardContextProvider;