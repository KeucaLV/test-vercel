import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/profile.js";
import "./App.css";
import Games from "./components/games.js";
import Header from "./components/header.js";
// import Search from "./components/search.js";
import Login from "./components/Login.js";
import Register from "./components/Register.jsx";
import AddTournament from "./components/AddTournament";
import SearchTest from "./components/searchTest";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        {/* Changed this line */}
        <Header />
        <Routes>
          <Route exact path="/" element={<Games />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Search" element={<SearchTest />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/AddTournament" element={<AddTournament />} />
          <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>{" "}
      {/* Changed this line */}
    </>
  );
}

export default App;
