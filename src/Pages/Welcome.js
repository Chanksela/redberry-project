import React from "react";
import { Link } from "react-router-dom";
import WelcomeCSS from "./Welcome.module.css";
import astro from "../Pictures/rocketman.png";

function WelcomePage() {
  return (
    <>
      {" "}
      <div id={WelcomeCSS.main}>
        <div id={WelcomeCSS.center}>
          <h1 id={WelcomeCSS.mainText}>Welcome Rocketeer!</h1>
          <Link id={WelcomeCSS.start} to="/survey">
            Start Questionnaire
          </Link>
          <Link id={WelcomeCSS.application} to="/submitted">
            Submitted Applications
          </Link>
          <img id={WelcomeCSS.rocketman} src={astro} alt="rocketman" />
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
