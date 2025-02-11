import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";

function CartOverview() {
  // const cart = useSelector((store) => store.cart.cart);
  const cartTotalQuantity = useSelector(getTotalQuantity);
  const cartTotalPrice = useSelector(getTotalPrice);

  if (cartTotalQuantity === 0) return;
  return (
    <div className="bg-stone-800 flex items-center justify-between text-stone-100 uppercase p-4">
      <p className="space-x-4">
        <span>{cartTotalQuantity} pizzas</span>
        <span>${cartTotalPrice.toFixed(2)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
