import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(true);

  const toggleBox = () => {
    setIsBoxOpen(!isBoxOpen);
    setIsTitleVisible(!isTitleVisible);
  };

  return (
    <>
      <div className={`header ${isTitleVisible ? "" : "hidden"}`}>
        <div className="flex-row-space">
          <div className="headerBox">
            <Link className={`title ${isTitleVisible ? "" : "hidden"}`} to="/">
              GameZon
            </Link>
          </div>
          <div className="navBox">
            <Link className="text" to="/Tournaments">
              Tournaments
            </Link>
            <Link className="text" to="/Search">
              Search
            </Link>
            <Link className="profileBtn" to="/Profile">
              Profile
            </Link>
            <button
              className={`nav-Btn ${isBoxOpen ? "open" : ""} `}
              onClick={toggleBox}
            >
              <div className="nav-lines"></div>
              <div className="nav-lines"></div>
              <div className="nav-lines"></div>
            </button>
          </div>
        </div>
      </div>
      {isBoxOpen && (
        <div className="fortnite">
          <div className={`header ${isTitleVisible ? "hidden" : ""}`}>
            <button className="backBtn" onClick={toggleBox}>
              <h1>➡</h1>
            </button>
          </div>
          <div className="mobileNav">
            <Link className="mobileText" to="/Tournaments">
              Tournaments
            </Link>
            <Link className="mobileText" to="/Search">
              Search
            </Link>
            <div className="mobileText">
              <Link className="mobileProfileBtn" to="/Profile">
                Profile
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
