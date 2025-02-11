import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
function Home() {
  const user = useSelector((store) => store.user);

  return (
    <div className="text-center my-10">
      <h1 className="text-xl mb-10 text-stone-800 font-semibold text-center">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {user.username !== "" ? (
        <Button to="/menu" type="primary">
          Continue ordering, {user.username}
        </Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
