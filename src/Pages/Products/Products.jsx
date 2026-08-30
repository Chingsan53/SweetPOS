import { useEffect, useState } from "react";
import ProductList from "../../Components/Products/ProductList";
import { getProducts } from "../../services/productService";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <ProductList
      products={products}
      onProductClick={(product) => {
        console.log(product);
      }}
    />
  );
}

export default Products;
