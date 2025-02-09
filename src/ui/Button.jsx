import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "transition-colors duration-300 px-4 py-3 rounded-full bg-yellow-400 hover:bg-yellow-300 hover:cursor-pointer focus:ring focus:ring-yellow-400 focus:outline-none focus:ring-offset-2 inline-block uppercase font-semibold tracking-wide disabled:cursor-not-allowed sm:px-8 sm:py-5";
  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
