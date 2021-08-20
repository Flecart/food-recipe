import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { makeStyles } from "@material-ui/core";
import HideOnScroll from './HideOnScroll';

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

    return(
        <React.Fragment>
            <HideOnScroll>
                <AppBar className={classes.root}>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6">Recipe Generator</Typography>
                        <Button href={process.env.PUBLIC_URL + "/"} color="inherit">Home</Button>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </React.Fragment>
    )
}
export default Navigator;