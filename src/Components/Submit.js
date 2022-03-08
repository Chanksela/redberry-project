import React from "react";
function Submit({ page, prevPage, inputData }) {
  return (
    <div id={SubmitCSS.container}>
      <button onClick={console.log(inputData)}>Submit</button>
      <button disabled={page === 0} id={SubmitCSS.button} onClick={prevPage}>
        {"<"}
      </button>
    </div>
  );
}

export default Submit;
