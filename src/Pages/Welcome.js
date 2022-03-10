import React from "react";
import { Link } from "react-router-dom";
import astro from "../Pictures/rocketman.png";
import WelcomeCSS from "./Welcome.module.css";
function WelcomePage() {
  return (
    <div id={WelcomeCSS.main}>
      <h1>Welcome Rocketeer!</h1>
      <div>
        {" "}
        <Link to="/survey" id={WelcomeCSS.survey_btn}>
          Start Questionnaire
        </Link>
        <br />
        <Link to="/submitted" id={WelcomeCSS.submitted_btn}>
          Submitted Applications
        </Link>
      </div>

      <img src={astro} alt="rocketman" />
    </div>
  );
}

export default WelcomePage;
