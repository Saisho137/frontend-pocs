import propTypes from "prop-types";

const GifItem = ({ title, url, id }) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <h4>{title}</h4>
        </div>
    )
}

GifItem.propTypes = {
    title: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
}

export default GifItem;