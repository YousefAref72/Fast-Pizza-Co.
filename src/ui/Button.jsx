import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base = `text-sm transition-colors duration-300  rounded-full hover:bg-yellow-300 hover:cursor-pointer focus:ring focus:ring-yellow-400 focus:outline-none focus:ring-offset-2 inline-block uppercase font-semibold tracking-wide
   disabled:cursor-not-allowed `;
  const styles = {
    primary: base + " px-4 py-3 bg-yellow-400",
    small: base + " px-4 py-2 text-xs bg-yellow-400",
    clear: `text-sm px-4 py-3 border-2 text-stone-500 border-stone-300 transition-colors duration-300 rounded-full hover:bg-stone-300 hover:cursor-pointer
     focus:ring focus:ring-stone-400 focus:outline-none focus:ring-offset-2 hover:text-stone-800
      inline-block uppercase font-semibold tracking-wide disabled:cursor-not-allowed focus:bg-stone-300 `,
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
