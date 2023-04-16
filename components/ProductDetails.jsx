import { useLocation, Link, Routes, Route, useParams } from "react-router-dom";
import ProductDetailInfo from "./ProductDetailInfo.jsx";
import ProductDetailNutrition from "./ProductDetailNutrition.jsx";
import ProductDetailStorage from "./ProductDetailStorage.jsx";
import useSWR from "swr";

export default function ProductDetails(props) {
  const params = useParams();
  const pathname = useLocation().pathname;

  const { data: product = {}, error } = useSWR(
    `https://react-tutorial-demo.firebaseio.com/productinfo/id${params.id}.json`
  );

  if (error) {
    return <p>Could not load product details. Please try again later.</p>;
  }

  return (
    <div className="product-details-layout">
      <div>
        <h2>{product.name}</h2>
        <img
          src={product.image}
          width="125"
          height="125"
          className="product-details-image"
          alt={product.name}
        />
      </div>
      <div>
        <div className="tabs">
          <ul>
            <li>
              <Link
                className={!!pathname.match(/\d$/) ? "tab-active" : ""}
                to={""}
              >
                Details
              </Link>
            </li>
            <li>
              <Link
                className={pathname.includes("/nutrition") ? "tab-active" : ""}
                to={"nutrition"}
              >
                Nutrition
              </Link>
            </li>
            <li>
              <Link
                className={pathname.includes("/storage") ? "tab-active" : ""}
                to={"storage"}
              >
                Storage
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <ProductDetailInfo
                onProductAdd={props.onProductAdd}
                product={product}
              />
            }
          ></Route>

          <Route
            path={"nutrition"}
            element={<ProductDetailNutrition nutrition={product.nutrition} />}
          ></Route>

          <Route
            path={"storage"}
            element={<ProductDetailStorage storage={product.storage} />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}
