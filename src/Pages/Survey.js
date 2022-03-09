import React, { useState } from "react";
import {
  TextContentArray,
  TextTitleArray,
  InputTitleArray,
} from "../Content/ContentArrays.js";
import PersonalInfo from "../Components/PersonalInfo";
import TechSkills from "../Components/TechSkills";
import Covid from "../Components/Covid";
import RedBerryInsight from "../Components/RedBerryInsight";
import Submit from "../Components/Submit.js";
var token = "8b3c3554-eef2-4147-98b5-e4694c656950";
function Survey() {
  // state for storing input data
  const [inputData, setInputData] = useState({
    token: token,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    skills: [{ id: "", experience: "" }],
    work_preference: "",
    had_covid: "",
    had_covid_at: "",
    vaccinated: "",
    vaccinated_at: "",
    will_organize_devtalk: "",
    devtalk_topic: "",
    something_special: "",
  });
  // setting page number to control back and forward buttons
  const [page, setPage] = useState(0);

  // switch case for diffrent pages
  const inputSwitch = () => {
    switch (page) {
      case 0:
        return (
          <PersonalInfo
            inputData={inputData}
            setInputData={setInputData}
            page={page}
            setPage={setPage}
          />
        );
      case 1:
        return (
          <TechSkills
            page={page}
            setPage={setPage}
            inputData={inputData}
            setInputData={setInputData}
          />
        );
      case 2:
        return (
          <Covid
            page={page}
            setPage={setPage}
            inputData={inputData}
            setInputData={setInputData}
          />
        );
      case 3:
        return (
          <RedBerryInsight
            page={page}
            setPage={setPage}
            inputData={inputData}
            setInputData={setInputData}
          />
        );
      case 4:
        return <Submit page={page} setPage={setPage} inputData={inputData} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <h1>{InputTitleArray[page]}</h1>
        <div>{inputSwitch()}</div>
      </div>
      <div>
        <h1>{TextTitleArray[page]}</h1>
        <p>{TextContentArray[page]}</p>
      </div>
    </div>
  );
}

export default Survey;
