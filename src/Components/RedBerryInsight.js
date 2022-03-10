import React, { useState } from "react";
import "./ErrorMessage.css";
function RedBerryInsight({ page, setPage, inputData, setInputData }) {
  // error messages
  const [devtalkErrorMessage, setDevtalkErrorMessage] = useState("");
  const [devtalkTopicErrorMessage, setDevtalkTopicErrorMessage] = useState("");
  const [somethingSpecialErrorMessage, setSomethingSpecialErrorMessage] =
    useState("");
  //  next page & validation
  const nextPage = (e) => {
    if (inputData.will_organize_devtalk === false) {
      setPage((current) => current + 1);
    }
    if (
      inputData.will_organize_devtalk === true &&
      inputData.devtalk_topic.length > 0
    ) {
      setPage((current) => current + 1);
    }
    if (inputData.will_organize_devtalk.length === 0) {
      setDevtalkErrorMessage("choose your answer");
    } else {
      setDevtalkErrorMessage("");
    }
    if (
      inputData.will_organize_devtalk === true &&
      inputData.devtalk_topic.length === 0
    ) {
      setDevtalkTopicErrorMessage("say something");
    } else {
      setDevtalkTopicErrorMessage("");
    }
    if (inputData.something_special.length === 0) {
      setSomethingSpecialErrorMessage("say something");
    } else {
      setSomethingSpecialErrorMessage("");
    }
  };
  // prev page function
  const prevPage = () => {
    setPage((current) => current - 1);
  };
  return (
    <div>
      <div>
        <p>Would you attend Devtalks and maybe also organize your own?</p>
        <input
          name="devtalk"
          type="radio"
          id="yes-devtalk"
          onChange={(e) => {
            setInputData({ ...inputData, will_organize_devtalk: true });
          }}
          value="yes"
        />
        <label htmlFor="yes-devtalk">Yes</label>
        <br />
        <input
          name="devtalk"
          type="radio"
          id="no-devtalk"
          onChange={(e) => {
            setInputData({ ...inputData, will_organize_devtalk: false });
          }}
          value="no"
        />
        <label htmlFor="no-devtalk">No</label> <br />
        <p className="error_message">{devtalkErrorMessage}</p>
      </div>
      {inputData.will_organize_devtalk === true ? (
        <div>
          <label htmlFor="topic">What will you talk about</label>
          <br />
          <input
            id="topic"
            type="text"
            placeholder="topic"
            onChange={(e) => {
              setInputData({ ...inputData, devtalk_topic: e.target.value });
            }}
            value={inputData.devtalk_topic}
          />
          <br />
          <p className="error_message">{devtalkTopicErrorMessage}</p>
        </div>
      ) : (
        ""
      )}{" "}
      <div>
        <label htmlFor="something_special">Say Something Special</label>
        <br />
        <input
          id=" something_special"
          type="text"
          placeholder="topic"
          onChange={(e) => {
            setInputData({ ...inputData, something_special: e.target.value });
          }}
          value={inputData.something_special}
        />
        <br />
        <p className="error_message">{somethingSpecialErrorMessage}</p>
      </div>
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
