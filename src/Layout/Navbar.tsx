import { useState } from "react";
import logo from "../assets/logo-img.jpg";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router";

const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
        {/* Logo */}
        <div className="flex justify-center items-center  ml-8">
          <div className="mx-4 rounded-lg">
            <img
              src={logo}
              alt="logo"
              className=" w-10 object-contain rounded-full"
            />
          </div>

          {/* Title */}
          <div>
            <span className="cursor-pointer font-bold font-serif text-xl "> 
              MDb - Movie Database
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 mr-10">
          {/* Search Input */}
          <div>
            <input
              type="text"
              placeholder="Search here..."
              value={searchQuery}
              onChange={handleSearchChange}
              className=" px-2 py-1 rounded-md text-white min-w-80 border-0"
            />
          </div>

          {/* User/Login Buttons */}
          <div className="mr-10 flex items-center gap-2">
            
            { isAuthenticated ? 
            (<div className="flex justify-center items-center gap-2"> 
              <button className="rounded-full border p-1 hover:bg-gray-700">
                <BiUser size={20} />
              </button>
              <div>User_name</div>
            </div>
              ) :(
              <button className="border border-gray-400 px-6 py-1 rounded-lg hover:bg-gray-400 hover:border-gray-700" onClick={handleClick} >
              Login
            </button>)
            }
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
