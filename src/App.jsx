import React, { useState } from "react";
import "./App.scss";
import image from "./assets/image.png";
import whiteHeart from "./assets/whiteHeart.png";
import greenHeart from "./assets/greenHeart.png";
import shuffle from "./assets/shuffle.png";
import backward from "./assets/backward.png";
import play from "./assets/play.png";
import forward from "./assets/forward.png";
import repeat from "./assets/repeat.png";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <section className="container">
      <div className="card">
        <img src={image}></img>
        <div className="card-head">
          <div className="card-info">
            <h1 className="card-title">Sale Epoque Part. II</h1>
            <h2 className="card-singer">Lacrim</h2>
          </div>
          <div type="button" onClick={() => setIsClicked(!isClicked)}>
            {isClicked ? (
              <img className="like" src={greenHeart}></img>
            ) : (
              <img className="like" src={whiteHeart}></img>
            )}
          </div>
        </div>
        <div className="playlist-navigation">
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <div className="music-timestamps">
            <p className="music-timestamp">0:00</p>
            <p className="music-timestamp">4:19</p>
          </div>
          <div className="navigation-menu">
            <img src={shuffle}></img>
            <img src={backward}></img>
            <img className="play" src={play}></img>
            <img src={forward}></img>
            <img src={repeat}></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
