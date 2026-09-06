function ProductCard({ product, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full overflow-hidden rounded-2xl bg-[#fffaf0] text-left shadow-sm"
    >
      {/* Image */}
      <div className="w-full aspect-[1.7] overflow-hidden">
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl leading-tight font-bold text-[#10233f]">
          {product.name}
        </h3>

        <p className="mt-2 text-xl leading-tight text-[#71819b]">
          {product.description}
        </p>

        {/* Bottom row */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-lg font-bold text-[#10233f]">
            ${product.price.toFixed(2)}
          </p>

          <span className="rounded-2xl bg-[#f45145] px-5 py-3 text-lg font-bold text-white">
            Add
          </span>
        </div>
      </div>
    </button>
  );
}

export default ProductCard;
