import GitItem from "./GitItem";
import useFetchGifs from "../hooks/useFetchGifs";
import propTypes from "prop-types";

const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            {isLoading && <h1>Cargando...</h1>}
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map(image => (
                    <GitItem key={image.id} {...image} />
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: propTypes.string.isRequired,
}

export default GifGrid;