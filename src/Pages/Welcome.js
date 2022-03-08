import React from "react";
import { Link } from "react-router-dom";
import astro from "../Pictures/rocketman.png";
function WelcomePage() {
  return (
    <div>
      <div>
        <h1>Welcome Rocketeer!</h1>
        <Link to="/survey">Start Questionnaire</Link>
        <Link to="/submitted">Submitted Applications</Link>
        <img src={astro} alt="rocketman" />
      </div>
    </div>
  );
}

export default WelcomePage;
