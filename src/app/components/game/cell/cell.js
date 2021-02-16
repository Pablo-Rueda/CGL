import React, {useContext} from 'react';
import {BoardContext} from "../../../context/BoardContext"

const Cell = () => {
    const {boardProps} = useContext(BoardContext);

    const cellStyle = {

        width: boardProps.cellSize + "px",
        height: boardProps.cellSize + "px",
    }
    return ( 
            <div style={cellStyle} className="cell"> </div>
     );
}
 
export default Cell;