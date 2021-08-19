import { Box } from "@material-ui/core"
import IntroTextBlock from "./IntroTextBlock"
import IntroImage from "./IntroImage"


export default function IntroScreen() {
    return(
        <Box>
            <IntroImage/>
            <IntroTextBlock/>
        </Box>
    )
}