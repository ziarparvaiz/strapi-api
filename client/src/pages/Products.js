import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Products() {
  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/products"
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div>
      <ul>
        {data.data?.map((product) => (
          <li key={product.id}>
            <h2>{product.attributes.name}</h2>
            <code>{product.attributes.price}</code>
            <Link to={`/products/${product.id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
