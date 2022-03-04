import React, { useState } from "react";
import WelcomeCSS from "./Welcome.module.css";
import astro from "./Pictures/rocketman.png";

function FirstPage() {
  const [welcome, setWelcome] = useState(true);

  const startSurvey = () => {
    setWelcome(!welcome);
    console.log(welcome);
  };

  return (
    <>
      {" "}
      <div id={WelcomeCSS.main}>
        <div id={WelcomeCSS.center}>
          <h1 id={WelcomeCSS.mainText}>Welcome Rocketeer!</h1>
          <button id={WelcomeCSS.start} onClick={startSurvey}>
            Start Questionnaire
          </button>
          <a id={WelcomeCSS.application}>Submitted Applications</a>
          <img id={WelcomeCSS.rocketman} src={astro} />
        </div>
      </div>
    </>
  );
}

export default FirstPage;
// <div id={WelcomeCSS.main}>
//   <div id={WelcomeCSS.center}>
//     <h1 id={WelcomeCSS.mainText}>Welcome Rocketeer!</h1>
//     <button id={WelcomeCSS.start} onClick={startSurvey}>
//       Start Questionnaire
//     </button>
//     <a id={WelcomeCSS.application}>Submitted Applications</a>
//     <img id={WelcomeCSS.rocketman} src={astro} />
//   </div>
// </div>;
