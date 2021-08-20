import { Box } from "@material-ui/core"
import { useEffect } from "react"
import PropTypes from "prop-types"
import IntroTextBlock from "./IntroTextBlock"
import IntroImage from "./IntroImage"
import { Fade } from "@material-ui/core"

export default function IntroScreen(props) {

    useEffect(() => {
        props.showNav(false)
    })
    return(
        <Box>
            <Fade in timeout={2000}>
                <IntroImage/>
            </Fade>
            <Fade in timeout={4000}>
                <IntroTextBlock/>
            </Fade>
        </Box>
    )
}

IntroScreen.propTypes = {
    showNav: PropTypes.func.isRequired,
};