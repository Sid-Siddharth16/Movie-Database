import logo from "../assets/logo-img.jpg";

import { Link, useNavigate } from "react-router";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div>
      <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
        <div className="max-w-1/3 ml-10">
          <img src={logo} alt="logo" className="max-w-20 bg-blend-multiply" />
        </div>
        <div className="max-w-1/3 ml-10">
          <ul className="flex justify-between gap-8">
            <li>  
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">Movies</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
          </ul>
        </div>
        <div className="mr-10">
          <button className="rounded-full border mr-2">User</button>
          <button onClick={handleClick}>Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
