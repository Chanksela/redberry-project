import React from "react";
import axios from "axios";
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
    <div>
      Submit{" "}
      <div>
        <button disabled={page === 0} onClick={prevPage}>
          GO BACK
        </button>
        <button onClick={() => console.log(inputData)}>INPUTDATA</button>
        <button onClick={() => postData()}>SEND DATA</button>
      </div>
    </div>
  );
}

export default Submit;
