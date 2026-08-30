function ProductCard({ product, onClick }) {
  return (
    <button type="button" onClick={onClick} className="product-card">
      <div className="product-card__image">
        {product.image && <img src={product.image} alt={product.name} />}
      </div>
      <div className="product-card__content">
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
      </div>
    </button>
  );
}

export default ProductCard;
