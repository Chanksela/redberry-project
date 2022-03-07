import React, { useState } from "react";
import SurveyCSS from "./Survey.module.css";
import {
  TextContentArray,
  TextTitleArray,
  InputTitleArray,
} from "../Content/ContentArrays.js";
import PersonalInfo from "../Components/PersonalInfo";
import TechSkills from "../Components/TechSkills";
import Covid from "../Components/Covid";
import RedBerryInsight from "../Components/RedBerryInsight";
import Submit from "../Components/Submit";

function Survey() {
  // setting page number to control back and forward buttons
  const [page, setPage] = useState(0);
  const nextPage = () => {
    setPage((current) => current + 1);
    console.log(page);
  };
  const prevPage = () => {
    setPage((current) => current - 1);
    console.log(page);
  };
  const inputSwitch = () => {
    switch (page) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <TechSkills />;
      case 2:
        return <Covid />;
      case 3:
        return <RedBerryInsight />;
      case 4:
        return <Submit />;
      default:
        return null;
    }
  };
  return (
    <div id={SurveyCSS.container}>
      <div id={SurveyCSS.left}>
        <h1>{InputTitleArray[page]}</h1>
        <div>{inputSwitch()}</div>
        <button disabled={page === 0} id={SurveyCSS.prev} onClick={prevPage}>
          {" "}
          {"<"}{" "}
        </button>
        <button disabled={page === 4} id={SurveyCSS.next} onClick={nextPage}>
          {">"}{" "}
        </button>
      </div>
      <div id={SurveyCSS.right}>
        <h1>{TextTitleArray[page]}</h1>
        <p>{TextContentArray[page]}</p>
      </div>
    </div>
  );
}

export default Survey;
