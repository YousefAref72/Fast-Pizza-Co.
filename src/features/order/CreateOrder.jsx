import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

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

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  //  give us returned data in case theres no submition
  const errors = useActionData();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let us go!</h2>

      <Form method="POST" className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="basis-40">First Name</label>
          <input className="input grow" type="text" name="customer" required />
        </div>

        <div className="flex items-center ">
          <label className="basis-40">Phone number</label>
          <div className="grow">
            <input
              className="input w-full  "
              type="tel"
              name="phone"
              required
            />
            {errors && errors.phone ? (
              <p className="text-red-500 bg-red-300 rounded-md px-3 mt-3 py-0.5">
                {errors.phone}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="flex items-center">
          <label className="basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="pb-7 flex items-center space-x-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
            className="h-6 w-6 accent-yellow-400 focus:ring focus:ring-yellow-300 focus:outline-none
            focus: ring-offset-2"
          />
          <label className=" font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? "Ordering..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  // converting from formData to jsObj
  console.log(formData);
  const data = Object.fromEntries(formData);
  // console.log(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please provide a valid phone number!";

  if (Object.keys(errors).length > 0) return errors;

  // const newOrder = await createOrder(order);

  // return redirect(`/order/${newOrder.id}`);
  return null;
}

export default CreateOrder;
