import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
        <Link to={`/product/${product.id}`}>
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* PRODUCT IMAGE */}
      <figure className="relative pt-[56.25%]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">
        {/* PRODUCT INFO */}
        <h2 className="card-title text-lg font-semibold">{product.name}</h2>
        <p className="text-xl font-semibold text-secondary">${Number(product.price).toFixed(2)}</p>

        {/* CARD ACTIONS */}
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-outline btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
          </Link>
  );
}
export default ProductCard;
