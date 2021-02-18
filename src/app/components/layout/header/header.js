import React from 'react';

// Style & Structure: 
import { makeStyles } from '@material-ui/core/styles';

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
  
    const classes = useStyles();

    return (
        <AppBar  position="fixed" className={classes.root} style={{ background: '#FDF8E2', margin: 0, boxShadow: "0px 0px 0px 0px black" }}>
          <Toolbar className={classes.customizeToolbar} style={{ boxShadow: "0px 0px 3px 0.1px black"}}>
                <h3 className={classes.title} > Conway's Game of Life</h3>
              <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                <Grid key={1} item><Button variant="contained" style={{background:"#5EA9BE", color:"white"}}>Start</Button> </Grid>
                <Grid key={2} item><Button variant="contained" style={{background:"#FFDDD3", color:"black"}}>Reset</Button> </Grid>
              </Grid>
          </Toolbar>
        </AppBar>
    );
  }
