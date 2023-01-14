import React from "react";
import "../styles/Advantage.scss";
import { advantagesData } from "../utils/data";

import Advantage from "./Advantage";

function AdvantageCont() {
  const advantagesSection = advantagesData.map(({ src, h2, p, direction }) => {
    return <Advantage src={src} h2={h2} p={p} direction={direction} />;
  });

  return <div className="adv-sect-cont">{advantagesSection}</div>;
}

export default AdvantageCont;
