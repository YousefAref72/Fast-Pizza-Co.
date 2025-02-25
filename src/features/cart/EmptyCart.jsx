import ButtonLink from "../../ui/ButtonLink";

function EmptyCart() {
  return (
    <div className="py-2 px-4">
      <ButtonLink to="/menu">&larr; Back to menu</ButtonLink>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
