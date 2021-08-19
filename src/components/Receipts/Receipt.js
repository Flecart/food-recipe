import { useEffect } from "react"
import PropTypes from 'prop-types';
import { useLocation } from "react-router";

function Receipt(props) {
    const location = useLocation()
    let receipt_id;

    function getId(current_location) {
        return current_location.split("/")[2]
    }

    useEffect(() => {
        receipt_id = getId(location.pathname)
        console.log(receipt_id);
        props.showNav(true)
    })

    return(
        <p>
            hello there
        </p>
    )
}

Receipt.propTypes = {
    showNav: PropTypes.func.isRequired,
}

export default Receipt;