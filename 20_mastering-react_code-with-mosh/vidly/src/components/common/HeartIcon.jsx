import PropTypes from "prop-types";

const HeartIcon = ({ onClick, hearted }) => {
    return (
        <i
            className={"clickable fa fa-heart" + (hearted ? "" : "-o")}
            aria-hidden="true"
            onClick={onClick}
        />
    );
};

HeartIcon.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default HeartIcon;
