import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import arrow from "./arrow.svg"
const Instructions = () => {
    const [instructions, setInstructions] = React.useState(0);

    const style = {
        position: "fixed",
        display:"flex",
        zIndex: 99999,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(50,50,50,0.5)",
    }

    const rulesStyle = {
        background:"white", 
        width:"95%", 
        height:"85%", 
        margin: "auto",
        alignSelf:"center",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 0px black"
    }

    const guideStyle = {
        display:"flex",
        width:"100%", 
        height:"100%", 
        margin: "auto",
    }

    // arrow mini-components
    const arrow1 = (
        <div>
            <img
            style={{ position: "fixed",
                width:"auto", height: 100,
                marginTop: 60, right:"35%"}}
            src={arrow}
            alt="arrow"/>
            <div style={{ position: "fixed",marginTop: 80, right:"43%",
                background:"white", width:"30%", minHeight:"30%", borderRadius: "10px",
                padding: 15}}>
                <ul>
                    <li>Clicking on "start", cells will come to life.</li>
                    <li>Clicking on "reset" will return the board state to how it was before you clicked on start.</li>
                    <li>Clicking on "clean" will clean all the board, removing the cells on it. </li>
                </ul>
            </div>
        </div>
    );
    const arrow2 = (
        <div>
            <img
            style={{ position: "fixed",
                width:"auto", height: 100,
                marginTop: 60, right:"10%"}}
            src={arrow}
            alt="arrow"/>
                        <div style={{ position: "fixed",marginTop: 80, right:"17%",
                background:"white", width:"15%", minHeight:"15%", borderRadius: "10px",
                padding: 15}}>
                <p>
                    You can increase the speed selecting a different option here.
                </p>
            </div>
        </div>
    );
    const arrow3 = (
        <div style={{display:"flex", position: "fixed", width:"100%",height:"100%"}}>
            <div style={{ 
                alignSelf:"center", margin: "0 auto",
                background:"white", width:"15%", minHeight:"15%", borderRadius: "10px",
                padding: 15}}>
                <p>
                    Start playing by giving life to a new cell!
                </p>
            </div>
        </div>
    );
    // screens
    const rules = (
        <div style={rulesStyle}> 
            <div>
                <h1 style={{textAlign:"center", padding: "1% 0 0"}}> Conyways Game of Life</h1>
                <p style={{margin:"0 5%"}} > 
                    <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" style={{color:"#5EA9BE", textDecoration: "underline"}} target="_blank" >The Game of Life,</a> also 
                    known simply as Life, is a cellular automaton devised by the British mathematician 
                    John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial
                    state, requiring no further input. The state of a cell will change based on it neightbours.
                </p>
                <h1 style={{textAlign:"center", margin:"1%"}}> Cells state behaviour:</h1>
                <ul style={{margin:"0 5%"}}>
                    <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
                    <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
                    <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
                    <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
                </ul>
            </div>
            <div style={{margin: "3% 0 0", textAlign:"center"}}>
                <Button variant="contained" style={{background:"#FFDDD3", color:"black"}} onClick={()=>{setInstructions(instructions+1)}}> Next </Button> 
            </div>
            <div style={{margin: "25px 0", textAlign:"center"}}> <p>
                See more of my work at <a href="https://pablorueda.com" target="_blank" style={{color:"#5EA9BE", textDecoration: "underline"}}>PabloRueda.com</a>
            </p> </div>
        </div>
    );
    const guide = (
        <div style={guideStyle} onClick={()=>{setInstructions(instructions+1)}}>
            {(instructions==1?arrow1:
                (instructions==2?arrow2:arrow3)
            )
        } 
         </div>
    );

    return instructions<4?( 
        <div style={style}>
            {instructions==0?rules:guide}
        </div> 
    ):(
        <div style={{display:"none"}}></div>
    );
}
 
export default Instructions;