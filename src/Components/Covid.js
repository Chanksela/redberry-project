import React from "react";
function Covid({ page, setPage, inputData, setInputData }) {
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
      <p>how would you prefer to work</p>
      <input
        name="work_preference"
        type="radio"
        id="from_office"
        onChange={(e) => {
          setInputData({ ...inputData, work_preference: e.target.id });
        }}
        value="from_office"
        required
      />
      <label htmlFor="from_office">Office</label>
      <br />
      <input
        name="work_preference"
        type="radio"
        id="from_home"
        onChange={(e) => {
          setInputData({ ...inputData, work_preference: e.target.id });
        }}
        value="from_home"
        required
      />
      <label htmlFor="from_home">Home</label>
      <br />
      <input
        name="work_preference"
        type="radio"
        id="hybrid"
        onChange={(e) => {
          setInputData({ ...inputData, work_preference: e.target.id });
        }}
        value="hybrid"
        required
      />
      <label htmlFor="hybrid">Hybrid</label>
      <br />
      <button onClick={console.log(inputData.work_preference)}>
        Click
      </button>{" "}
      <>
        <button disabled={page === 0} onClick={prevPage}>
          {"<"}
        </button>
        <button onClick={nextPage}>{">"} </button>
      </>
    </div>
  );
}

export default Covid;
