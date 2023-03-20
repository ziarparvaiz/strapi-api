import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function ProductDetails() {
  const { id } = useParams();
  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/products/" + id
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  console.log(data);

  return (
    <div>
      <h1>{data.data.attributes.name}</h1>
      <h1>{data.data.attributes.details}</h1>
      <h1>${data.data.attributes.price}</h1>
    </div>
  );
}

export default ProductDetails;
