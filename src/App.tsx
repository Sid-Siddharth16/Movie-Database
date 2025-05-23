import "./styles/App.css";
// import Login from "./pages/Login";
// import Navbar from "./Layout/Navbar";
// import { Routes, Route } from "react-router";
// import SignUp from "./pages/SignUp";
// import SlideShow from "./components/SlideShow";
// import Home from "./pages/Home";
import AppRoutes from "./routes";

function App() {
  
  return (
    <div className="App">
      <AppRoutes />
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </div>
  );
}

export default App;
