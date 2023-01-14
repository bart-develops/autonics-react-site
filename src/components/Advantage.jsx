import React from "react";
import "../styles/Advantage.scss";

function Advantage({ direction, h2, p, src }) {
  return (
    <div className={`adv-cont adv-${direction}`}>
      <div className="adv-text-cont">
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
      <img className="adv-img" src={src} alt="tetst" />
    </div>
  );
}

export default Advantage;
