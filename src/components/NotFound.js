import PropTypes from 'prop-types';


function NotFound() {
    return(
        <p>resource not found</p>
    )
}

NotFound.propTypes = {
    showNav: PropTypes.func.isRequired,
}

export default NotFound;