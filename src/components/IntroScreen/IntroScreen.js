import { Box } from "@material-ui/core"
import IntroTextBlock from "./IntroTextBlock"
import IntroImage from "./IntroImage"
import { useEffect } from "react"


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