import './ProductCard.css'

const ProductCard = ({ product }) => {
    return (
        <section className='container'>
            <div>
                <h2>{product?.name}</h2>
                <img className='product__image' src={product?.avatar?.file?.url} alt={product?.name} />
                <h3>{product?.description}</h3>
            </div>
        </section>
    );
};

export default ProductCard;