import { createRoot } from "react-dom/client";
// import { SWRConfig } from "swr";
import { SWRConfig } from "swr";
import "./index.css";
import App from "../components/App.jsx";

const fetcher = (url) => fetch(url).then((response) => response.json());

const root = createRoot(document.getElementById("root"));
root.render(
  <SWRConfig value={{ fetcher }}>
    <App />
  </SWRConfig>
);
