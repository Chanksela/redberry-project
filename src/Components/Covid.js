import React, { useState } from "react";
import "./ErrorMessage.css";
function Covid({ page, setPage, inputData, setInputData }) {
  // error states
  const [workErrorMessage, setWorkErrorMessage] = useState("");
  const [covidErrorMessage, setCovideErrorMessage] = useState("");
  const [covidDateErrorMessage, setCovidDateErrorMessage] = useState("");
  const [vaccinatedErrorMessage, setVaccinatedErrorMessage] = useState("");
  const [vaccinatedDateErrorMessage, setVaccinatedDateErrorMessage] =
    useState("");

  // next page and validation
  const nextPage = (e) => {
    if (
      inputData.work_preference.length === 0 ||
      inputData.had_covid.length === 0
    ) {
      e.preventDefault();
    }
    if (inputData.work_preference.length > 0 && inputData.had_covid === false) {
      setPage((current) => current + 1);
    }
    if (
      (inputData.work_preference.length > 1 &&
        inputData.had_covid === true &&
        inputData.had_covid_at.length === 0) ||
      inputData.vaccinated.length === 0 ||
      inputData.vaccinated === true
    ) {
      e.preventDefault();
    }
    if (
      inputData.work_preference.length > 1 &&
      inputData.had_covid === true &&
      inputData.had_covid_at.length > 0 &&
      inputData.vaccinated === false
    ) {
      setPage((current) => current + 1);
    }
    if (
      inputData.work_preference.length > 1 &&
      inputData.had_covid === true &&
      inputData.had_covid_at.length > 0 &&
      inputData.vaccinated === true &&
      inputData.vaccinated_at.length > 0
    ) {
      setPage((current) => current + 1);
    }

    if (inputData.work_preference.length === 0) {
      setWorkErrorMessage("Choose Preferable Work Type");
    } else {
      setWorkErrorMessage("");
    }
    if (inputData.had_covid.length === 0) {
      setCovideErrorMessage("did you had covid?");
    } else {
      setCovideErrorMessage("");
    }
    if (inputData.had_covid_at.length === 0) {
      setCovidDateErrorMessage("enter date");
    } else {
      setCovidDateErrorMessage("");
    }
    if (inputData.vaccinated.length === 0) {
      setVaccinatedErrorMessage("enter date");
    } else {
      setVaccinatedErrorMessage("");
    }
    if (inputData.vaccinated_at.length === 0) {
      setVaccinatedDateErrorMessage("enter date");
    } else {
      setVaccinatedDateErrorMessage("");
    }
  };

  // prev page function
  const prevPage = () => {
    setPage((current) => current - 1);
  };
  return (
    <div>
      {/* preferable work type */}
      <p>how would you prefer to work</p>
      <input
        name="work_preference"
        type="radio"
        id="from_office"
        onChange={(e) => {
          setInputData({ ...inputData, work_preference: e.target.value });
        }}
        value="from_office"
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
      />
      <label htmlFor="hybrid">Hybrid</label>
      <br />
      <p className="error_message">{workErrorMessage}</p>
      <br /> {/* covid infection */}
      <p>were you covid infected?</p>
      <input
        name="covid_infection"
        type="radio"
        id="yes"
        onChange={(e) => {
          setInputData({ ...inputData, had_covid: true });
        }}
        value="yes"
      />
      <label htmlFor="yes">Yes</label>
      <br />
      <input
        name="covid_infection"
        type="radio"
        id="no"
        onChange={(e) => {
          setInputData({ ...inputData, had_covid: false });
        }}
        value="no"
      />
      <label htmlFor="no">No</label> <br />
      <p className="error_message">{covidErrorMessage}</p>
      {/* Covid date */}
      {inputData.had_covid > 0 ? (
        <div>
          {" "}
          <p>when were you covid infected?</p>
          <input
            name="covid_date"
            type="date"
            id="date"
            onChange={(e) => {
              setInputData({ ...inputData, had_covid_at: e.target.value });
            }}
          />
          <p className="error_message">{covidDateErrorMessage}</p>
          <div>
            {" "}
            <p>are you vaccinated?</p>
            <input
              name="vaccinated"
              type="radio"
              id="vaccinated"
              onChange={(e) => {
                setInputData({ ...inputData, vaccinated: true });
              }}
              value="yes"
            />
            <label htmlFor="vaccinated">Yes</label>
            <br />
            <input
              name="vaccinated"
              type="radio"
              id="not_vaccinated"
              onChange={(e) => {
                setInputData({ ...inputData, vaccinated: false });
              }}
              value="no"
            />
            <label htmlFor="not_vaccinated">No</label> <br />
            <p className="error_message">{vaccinatedErrorMessage}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      {inputData.vaccinated ? (
        <div>
          {" "}
          <p>when were you vaccinated?</p>
          <input
            name="vaccine_date"
            type="date"
            id="date"
            onChange={(e) => {
              setInputData({ ...inputData, vaccinated_at: e.target.value });
            }}
          />
          <p className="error_message">{vaccinatedDateErrorMessage}</p>
        </div>
      ) : (
        ""
      )}
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
