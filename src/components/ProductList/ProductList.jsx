import products from "../../data/products.json";
import ProductCard from "../../Pages/Products/ProductCard";

function ProductList({ variant = "default", onProductClick }) {
  return (
    <div className="w-full bg-menuBackground rounded-2xl p-4">
      <div className="pb-4">
        <div className="font-dm text-2xl  text-activeButton">CATALOG</div>
        <h1 className="font-dm text-3xl font-bold ">All Items</h1>
      </div>
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
    </div>
  );
}

export default ProductList;
