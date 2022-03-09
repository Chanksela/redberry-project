import React, { useState } from "react";
import { Link } from "react-router-dom";
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

function Survey() {
  // state for storing input data
  const [inputData, setInputData] = useState({
    token: "",
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
  // next page function
  // const nextPage = (e) => {
  //   if (
  //     inputData.first_name.length < 3 ||
  //     inputData.last_name.length < 4 ||
  //     !inputData.email.includes("@") ||
  //     (!inputData.phone.startsWith("+995") &&
  //       inputData.phone.startsWith("+995")) ||
  //     inputData.phone.length < 13
  //   ) {
  //     e.preventDefault();
  //     setNameError("name should be greater than 3");
  //   } else {
  //     setPage((current) => current + 1);
  //   }
  //   console.log(page);
  //   console.log(inputData);
  // };
  // // prev page function
  // const prevPage = () => {
  //   setPage((current) => current - 1);
  //   console.log(page);
  // };

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
            // prevPage={prevPage}
            // nextPage={nextPage}
          />
        );
      case 1:
        return (
          <TechSkills
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
        return <Submit />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <h1>{InputTitleArray[page]}</h1>
        <div>{inputSwitch()}</div>
        {/* {page < 4 ? (
          <>
            <button disabled={page === 0} onClick={prevPage}>
              {"<"}
            </button>
            <button onClick={nextPage}>{">"} </button>
          </>
        ) : (
          <Link
            to="/submitted"
            onClick={() => {
              if (page === 4) {
                console.log(inputData);
              }
            }}
          >
            Submit
          </Link>
        )} */}
      </div>
      <div>
        <h1>{TextTitleArray[page]}</h1>
        <p>{TextContentArray[page]}</p>
      </div>
    </div>
  );
}

export default Survey;
