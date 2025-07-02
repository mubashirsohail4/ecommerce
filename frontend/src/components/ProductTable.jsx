import { EditIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";

function ProductTable({ products }) {
  const { deleteProduct } = useProductStore();
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Created At</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td>{product.name}</td>
              <td>${Number(product.price).toFixed(2)}</td>
              <td>
                {product.created_at
                  ? new Date(product.created_at).toLocaleString()
                  : ""}
              </td>
              <td>
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-sm btn-info btn-outline"
                >
                  <EditIcon className="size-4" />
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-error  btn-outline"
                  onClick={() => deleteProduct(product.id)}
                >
                  <Trash2Icon className="size-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ProductTable;
