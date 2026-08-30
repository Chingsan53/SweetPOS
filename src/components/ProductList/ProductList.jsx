import ProductCard from "../../Pages/Products/ProductCard";

function ProductList({ products = [], onProductClick, variant = "default" }) {
  return (
    <div
      className={`product-list product-list--${variant} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onProductClick?.(product)}
        />
      ))}
    </div>
  );
}

export default ProductList;
