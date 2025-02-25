import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import ButtonLink from "../../ui/ButtonLink";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { clearCart, getCart } from "./cartSlice";
const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const username = useSelector((store) => store.user.username);
  if (cart.length === 0) return <EmptyCart />;
  return (
    <div className="mt-3 ml-4">
      <ButtonLink to="/menu">&larr; Back to menu</ButtonLink>

      <h2 className="text-xl font-medium my-6">Your cart, {username} </h2>
      <ul className="divide-y divide-stone-200 divide-b mb-3">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="space-x-3">
        {/* <Link to="/order/new">Order pizzas</Link> */}
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="clear" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
