import React from "react";
import Welcome from "./Welcome.module.css";
import astro from "../Pictures/rocketman.png";
function FirstPage() {
  return (
    <div id={Welcome.main}>
      <div id={Welcome.center}>
        <h1 id={Welcome.mainText}>Welcome Rocketeer!</h1>
        <button id={Welcome.start}>Start Questionnaire</button>
        <a id={Welcome.application}>Submitted Applications</a>
        <img id={Welcome.rocketman} src={astro} />
      </div>
    </div>
  );
}

export default FirstPage;
