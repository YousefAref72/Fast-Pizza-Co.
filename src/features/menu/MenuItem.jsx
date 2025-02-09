import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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
              <Button type="small">Add to cart</Button>
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
