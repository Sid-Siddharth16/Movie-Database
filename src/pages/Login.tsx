import React, { useState } from "react";
import { useNavigate } from "react-router";


export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    setEmail("");
    setPassword("");
  };
  const handleClick = () => {
    navigate("/signup");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-2/3 md:max-w-1/3 mx-auto mt-10 flex flex-col justify-center items-center gap-4 p-9 py-10 border border-gray-200 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Login</h2>

        <input
        className="border border-gray-400 rounded-md p-2"
          type="email"
          placeholder="Enter email..."
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <input
          className="border border-gray-400 rounded-md p-2"
          type="password"
          placeholder="Enter password..."
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />

        <button className="text-white border-1 px-6 py-1 rounded-md bg-blue-400 hover:bg-blue-600"> Login</button>

        <span>
          Don't have account? 
          <a className="mx-1 text-blue-700 underline cursor-pointer" onClick={handleClick}>Register</a>
        </span>
      </div>
    </form>
  );
}
