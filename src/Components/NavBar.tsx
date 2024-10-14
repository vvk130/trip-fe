import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/stations">stations</Link>
      <span> || </span>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
