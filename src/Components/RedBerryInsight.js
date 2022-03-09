import React from "react";

function RedBerryInsight({ page, setPage, inputData, setInputData }) {
  const nextPage = (e) => {
    setPage((current) => current + 1);
    console.log(page);
    console.log(inputData);
  };
  // prev page function
  const prevPage = () => {
    setPage((current) => current - 1);
    console.log(page);
  };
  return (
    <div>
      RedBerryInsight{" "}
      <>
        <button disabled={page === 0} onClick={prevPage}>
          {"<"}
        </button>
        <button onClick={nextPage}>{">"} </button>
      </>
    </div>
  );
}

export default RedBerryInsight;
