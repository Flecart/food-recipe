import { Box } from "@material-ui/core"
import { useEffect } from "react"
import PropTypes from "prop-types"
import IntroTextBlock from "./IntroTextBlock"
import IntroImage from "./IntroImage"


export default function IntroScreen(props) {

    useEffect(() => {
        props.showNav(false)
    })
    return(
        <Box>
            <IntroImage/>
            <IntroTextBlock/>
        </Box>
    )
}

IntroScreen.propTypes = {
    showNav: PropTypes.func.isRequired,
};