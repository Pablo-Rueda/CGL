import React, {useContext} from 'react';

import {GameContext} from "../../../context/GameContext"

// Style & Structure: 
import { makeStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';

//Components:
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    customizeToolbar: {
      minHeight: '75px',
      paddingRight:55,
      color: "rgb(31, 65, 75)",
    },
    title: {
      flexGrow: 1,
      width:"100%",
      margin: "auto 0"
    },
  }));
  
  export default function ButtonAppBar() {
    const {time,startGame, resetBoard, cleanBoard, setSpeed} = useContext(GameContext);

    const classes = useStyles(); 


    // radio:
    const [selectedValue, setSelectedValue] = React.useState('1000');


    const handleChange = (event) => {
      setSelectedValue(event.target.value);
      setSpeed(event.target.value)
      console.log(event.target.value)
    };
    // toggled components:
    const buttonStart = (
      <Button variant="contained" style={{background:"#5EA9BE", color:"white"}} onClick={()=>{startGame()}}> Start </Button> 
    );
    const buttonStop = (
      <Button variant="contained" style={{background:"#FFDDD3", color:"black"}} onClick={()=>{startGame()}}> Stop </Button> 
    )

    return (
        <AppBar  position="fixed" className={classes.root} style={{ background: '#FDF8E2', margin: 0, boxShadow: "0px 0px 0px 0px black" }}>
          <Toolbar className={classes.customizeToolbar} style={{ boxShadow: "0px 0px 3px 0.1px black"}}>
                <h3 className={classes.title} > Conway's Game of Life</h3>
              <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                    <Grid key={1} item>
                      {time?buttonStop:buttonStart}
                    </Grid>

                    <Grid key={2} item>
                      <Button variant="contained" style={{background:"#5EA9BE", color:"white"}} onClick={()=>{resetBoard()}}>Reset</Button>
                    </Grid>

                    <Grid key={3} item>
                      <Button variant="contained" style={{background:"#5EA9BE", color:"white"}} onClick={()=>{cleanBoard()}}>Clean</Button>
                    </Grid>

                  <Grid key={4} item>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                      <Grid key={6} item>
                        <h3 style={{margin:"auto 0"}}> Set Speed:</h3>
                      </Grid>
                      <Grid key={7} item>
                        <div>                    
                          <Radio
                              checked={selectedValue === '1000'}
                              onChange={handleChange}
                              value="1000"
                              inputProps={{ 'aria-label': 'A' }}
                            />
                            <Radio
                              checked={selectedValue === '250'}
                              onChange={handleChange}
                              value="250"
                              inputProps={{ 'aria-label': 'B' }}
                            />
                            <Radio
                              checked={selectedValue === '00000.1'}
                              onChange={handleChange}
                              value="00000.1"
                              inputProps={{ 'aria-label': 'C' }}
                            />
                        </div>
                      </Grid>
                    </Grid>
                </Grid>
              </Grid>
          </Toolbar>
        </AppBar>
    );
  }
