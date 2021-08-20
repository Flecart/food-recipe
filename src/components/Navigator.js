import { Link } from "react-router-dom"
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "#63371e"
    },
    title: {
      flexGrow: 1,
    },
}));



function Navigator() {
    const classes = useStyles();

    function redirectMain() {
        window.location.href = "/";
    }

    return(
        <React.Fragment>
            <AppBar className={classes.root}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6">Recipe Generator</Typography>
                    <Button onClick={redirectMain} color="inherit">Home</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
export default Navigator;