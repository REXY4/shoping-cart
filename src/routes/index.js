import { createBrowserRouter } from "react-router-dom";
import CartPages from "../pages/cart";
import Main from "../pages/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/cart",
      element: <CartPages />,
    },
  ]);

export default router;  