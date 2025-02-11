import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  deleteItem,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const quantity = useSelector(getCurrentQuantityById(pizzaId));
  const dispatch = useDispatch();

  function handleIncreaseItemQuantity() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDecreaseItemQuantity() {
    if (quantity === 1) {
      return dispatch(deleteItem(pizzaId));
    }
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex gap-2 items-center">
      <Button type="round" onClick={handleDecreaseItemQuantity}>
        -
      </Button>
      <p className="text-sm">{quantity}</p>
      <Button type="round" onClick={handleIncreaseItemQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
