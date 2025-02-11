import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import {
  addItem,
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.cart);
  const item = cart.find((item) => item.pizzaId === id);

  function handleAddtoCart() {
    const newItem = {
      pizzaId: id,
      name: "Mediterranean",
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  function handleIncreaseItemQuantity() {
    dispatch(increaseItemQuantity(id));
  }

  function handleDecreaseItemQuantity() {
    if (item.quantity === 1) {
      return dispatch(deleteItem(id));
    }
    dispatch(decreaseItemQuantity(id));
  }

  function handleDeleteItem() {
    dispatch(deleteItem(id));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-col pt-0.5 grow">
        <p className="font-medium text-stone-8000">{name}</p>
        <p className="font-medium text-stone-600 opacity-70 capitalize italic text-sm">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <>
              <p className="text-sm">{formatCurrency(unitPrice)}</p>
              {item !== undefined ? (
                <div className="flex items-center space-x-3">
                  <UpdateItemQuantity pizzaId={id} />
                  <DeleteItem pizzaId={id} />
                </div>
              ) : (
                <Button type="small" onClick={handleAddtoCart}>
                  Add to cart
                </Button>
              )}
            </>
          ) : (
            <p className="text-sm uppercase text-stone-500 font-medium ">
              Sold out
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
