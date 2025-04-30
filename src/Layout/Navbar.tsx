import { useState } from "react";
import logo from "../assets/logo-img.jpg";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router";

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
        {/* Logo */}
        <div className="ml-10 rounded-lg">
          <img
            src={logo}
            alt="logo"
            className="h-12 w-auto object-contain rounded-full"
          />
        </div>

        {/* Title */}
        <div>
          <span className="cursor-pointer font-extrabold text-3xl">
            MDb - Movie Database
          </span>
        </div>

        {/* Search Input */}
        <div>
          <input
            type="text"
            placeholder="Search here..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-2 py-1 rounded-md text-black"
          />
        </div>

        {/* User/Login Buttons */}
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
