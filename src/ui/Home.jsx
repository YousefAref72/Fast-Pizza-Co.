import CreateUser from "../features/user/CreateUser";
function Home() {
  return (
    <div className="text-center my-10">
      <h1 className="text-xl mb-10 text-stone-800 font-semibold text-center">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
