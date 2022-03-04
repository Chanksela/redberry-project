import React, { useState } from "react";
import SurveyCSS from "./Survey.module.css";
import {
  TextContentArray,
  TextTitleArray,
  InputTitleArray,
} from "../Content/ContentArrays.js";

function Survey() {
  const [page, setPage] = useState(0);
  const nextPage = () => {
    setPage((current) => current + 1);
    console.log(page);
  };
  const prevPage = () => {
    setPage((current) => current - 1);
    console.log(page);
  };

  return (
    <div id={SurveyCSS.container}>
      <div id={SurveyCSS.left}>
        <h1>{InputTitleArray[page]}</h1>
        <p>here goes the inputs</p>
        <button disabled={page == 0} id={SurveyCSS.prev} onClick={prevPage}>
          {" "}
          {"<"}{" "}
        </button>
        <button disabled={page == 3} id={SurveyCSS.next} onClick={nextPage}>
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
