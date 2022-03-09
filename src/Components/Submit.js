import React from "react";
function Submit({ page, setPage, inputData }) {
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
      </div>
    </div>
  );
}

export default Submit;
