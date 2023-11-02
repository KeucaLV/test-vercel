import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import GameBox from "./gamebox.js";

function Profile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/datubazes/selects/index.php")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <div className="mainProfile">
        <div className="flex-row">
          <div className="userBox">
            <h1 className="welcome">Welcome, *Username* !</h1>
            <div className="userLine"></div>
          </div>
          <div className="managamentBox">
            <div className="forgotBox">
              <div className="flex-row">
                <p className="userText">Want to use another account? </p>{" "}
                <Link to = "/Login">
                  Switch Accounts
                </Link>
              </div>
              <div className="flex-row">
                <p className="userText">Want to see your Gaming Profile? </p>{" "}
                <Link className="a" to="/Login">
                  Login
                </Link>
              </div>
              <div className="flex-row">
                <p className="userText">Forgot your password?</p>{" "}
                <Link to = "/ForgotPassword">
                  Reset Password
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h1 className="yourGames">Your games: </h1>
        <div className="flex-row-games">
          {data.map((item) => (
            <GameBox
              key={item.id}
              name={item.name}
              imageUrl={item.img}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Profile;
