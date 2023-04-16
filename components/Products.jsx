import Product from "./Product.jsx";
import useSWR from "swr";
import Loader from "./Loader.jsx";

export default function Products(props) {
  const {
    data: products = [],
    loading,
    error,
  } = useSWR("https://react-tutorial-demo.firebaseio.com/supermarket.json");

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {error && (
          <p>
            There was an error loading the products. Please try again later.
          </p>
        )}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
