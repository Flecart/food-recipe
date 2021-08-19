import { useEffect } from "react"
import PropTypes from "prop-types"

function History(props) {
    useEffect(() => {
        props.showNav(true)
    })
    return(
        <div>Hello</div>
    )
}

History.propTypes = {
    showNav: PropTypes.func.isRequired,
}

export default History;