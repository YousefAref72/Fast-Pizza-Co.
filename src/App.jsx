import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as loaderMenu } from "./features/menu/Menu";
import CreateOrder, {
  action as actionOrder,
} from "./features/order/CreateOrder";
import Order, { loader as loaderOrder } from "./features/order/Order";
import Cart from "./features/cart/Cart";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
// import  from "./features/user/";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: loaderMenu,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: actionOrder,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: loaderOrder,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
