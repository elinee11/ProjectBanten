import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Destination from "../pages/destination";
import Culinary from "../pages/culinary";
import News from "../pages/news";
import About from "../pages/about";
import Culture from "../pages/culture";
import SinglePage from "../pages/single";

/**
 * Daftar routing yang tersedia pada website
 */
const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/wisata",
    element: <Destination />,
  },
  {
    path: "/wisata/:slug",
    element: <SinglePage path="destinations" pageError="wisata" />,
  },
  {
    path: "/budaya",
    element: <Culture />,
  },
  {
    path: "/budaya/:slug",
    element: <SinglePage path="culture" pageError="budaya" />,
  },
  {
    path: "/kuliner",
    element: <Culinary />,
  },
  {
    path: "/kuliner/:slug",
    element: <SinglePage path="culinary" pageError="kuliner" />,
  },
  {
    path: "/berita",
    element: <News />,
  },
  {
    path: "/berita/:slug",
    element: <SinglePage path="posts" pageError="berita" />,
  },
  {
    path: "/tentang",
    element: <About />,
  },
  {
    path: "*",
    element: <App />,
  },
]);

export default routers;
