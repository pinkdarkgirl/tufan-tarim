// style import
import "./App.css";

// rrd imports
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// component imports
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ProductsIlac from "./pages/ProductsIlac";
import ProductsGubre from "./pages/ProductsGubre";
import ProductsSulama from "./pages/ProductsSulama";
import ProductsTohum from "./pages/ProductsTohum";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/hakkimizda",
        element: <About />,
      },
      {
        path: "/hizmetler",
        element: <Services />,
      },
      {
        path: "/urunler",
        element: <Products />,
        children: [
          {
            path: "ilac",
            element: <ProductsIlac />,
          },
          {
            path: "gubre",
            element: <ProductsGubre />,
          },
          {
            path: "sulama",
            element: <ProductsSulama />,
          },
          {
            path: "tohum",
            element: <ProductsTohum />,
          },
        ],
      },
      {
        path: "/iletisim",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
