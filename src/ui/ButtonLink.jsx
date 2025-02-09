import { Link, useNavigate } from "react-router-dom";

function ButtonLink({ children, to }) {
  const className = "text-blue-500 hover:text-blue-600 hover:underline";
  const navigate = useNavigate();
  if (to === "-1")
    return (
      <Link onClick={() => navigate(-1)} to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default ButtonLink;
