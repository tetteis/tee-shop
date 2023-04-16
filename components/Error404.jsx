import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="home-layout">
      <div>
        <h1>Page Not Found. 😥</h1>
        <Link to="/products">Browse our products</Link> or{" "}
        <Link to="/">go back </Link> to homepage.
      </div>
    </div>
  );
}
