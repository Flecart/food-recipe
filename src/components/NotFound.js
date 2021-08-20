import PropTypes from 'prop-types';
import { Typography, Container, Box, Divider, Button, makeStyles } from "@material-ui/core";
import React from 'react';

const useStyle = makeStyles({
    button: {
        backgroundColor: "#63371e",
        color: "#DDDDDD",
        '&:hover': {
            backgroundColor: '#52260f',
            color: "#CCCCCC"
        },
    }
})

function NotFound(props) {
    props.showNav(true);
    const classes = useStyle();
    return(
        <React.Fragment>
            <Container>
                <Box pt="15vh" pb="5vh" mx="10vw">
                    <Typography variant="h3" gutterBottom>
                        404 🥺 Oooops...
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Looks like the mighty fruit monster has eaten our page.
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        Go back to safety now!
                    </Typography>

                    <Box pt="5vh">
                        <Button href="/" className={classes.button}> Back</Button>
                    </Box>

                </Box>
        </Container>
        </React.Fragment>
    )
}

NotFound.propTypes = {
    showNav: PropTypes.func.isRequired,
}

export default NotFound;