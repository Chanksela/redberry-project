import React from "react";

function Submit({ page, setPage, inputData }) {
  function postData() {
    fetch("https://bootcamp-2022.devtest.ge/api/application", {
      method: "POST",
      headers: {
        token: "8b3c3554-eef2-4147-98b5-e4694c656950",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
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
        <button onClick={postData}>SEND DATA</button>
      </div>
    </div>
  );
}

export default Submit;
