import React from "react";
import axios from "axios";
import SubmitCSS from "./Submit.module.css";
import { Link } from "react-router-dom";
function Submit({ page, setPage, inputData }) {
  function postData() {
    const URL = "https://bootcamp-2022.devtest.ge/api/application";
    axios
      .post(URL, inputData)
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  }
  // prev page function
  const prevPage = () => {
    setPage((current) => current - 1);
    console.log(page);
    console.log(inputData);
  };
  return (
    <div id={SubmitCSS.main}>
      <div>
        {" "}
        <button id={SubmitCSS.back} disabled={page === 0} onClick={prevPage}>
          Back
        </button>
        <button to="/submitted" id={SubmitCSS.submit} onClick={postData}>
          Submit
        </button>
      </div>
      <div id={SubmitCSS.links}>
        {" "}
        <Link id={SubmitCSS.home} to="/">
          HomePage
        </Link>
        <Link id={SubmitCSS.applications} to="/">
          Applications
        </Link>
      </div>
    </div>
  );
}

export default Submit;
