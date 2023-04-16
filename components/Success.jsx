import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="home-layout">
      <div>
        <h1>Payment Successfully Received ✨</h1>
        <Link to="/products">Browse more products</Link> or{" "}
        <Link to="/">go back </Link> to homepage.
      </div>
    </div>
  );
}
