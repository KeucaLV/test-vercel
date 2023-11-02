import React, { useState, useEffect } from "react";
import "./game.css";
import GameBox from "./gamebox.js";

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/datubazes/selects/recomended.php")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <div className="image-box">
        <img
          className="background-image"
          src="https://external-preview.redd.it/anocBu6nhCUnoAg72EkRw54lnYVJX2jByx50-Zt1Np0.jpg?width=1080&crop=smart&auto=webp&s=7db8fff8d732add34ec2a88b743962477039fcc6"
          alt="background"
        ></img>
      </div>
      <div className="main">
        <h1 className="recomend-title">Recommended By Us!</h1>
        <div className="flex-row">
          {data.map((item) => (
            <>
              <GameBox
                key={item.id}
                name={item.name}
                imageUrl={item.img}
                description={item.description}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Data;
