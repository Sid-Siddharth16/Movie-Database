import logo from "../assets/logo-img.jpg";

import { useNavigate } from "react-router";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
        <div className="ml-10">
          <img
            src={logo}
            alt="logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        <div>
          <ul className="flex justify-between gap-8">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="mr-10 flex items-center gap-2">
          <button className="rounded-full border p-1 hover:bg-gray-700">
            <BiUser size={20} />
          </button>
          <button
            className="cursor-pointer hover:underline"
            onClick={handleClick}
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
