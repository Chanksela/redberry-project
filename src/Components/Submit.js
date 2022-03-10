import React from "react";
import axios from "axios";
import SubmitCSS from "./Submit.module.css";
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
      <button id={SubmitCSS.back} disabled={page === 0} onClick={prevPage}>
        Back
      </button>
      <button to="/submitted" id={SubmitCSS.submit} onClick={postData}>
        Submit
      </button>
    </div>
  );
}

export default Submit;
