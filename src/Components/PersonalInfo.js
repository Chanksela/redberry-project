import React, { useState } from "react";
import "./ErrorMessage.css";
function PersonalInfo({ page, setPage, inputData, setInputData }) {
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const nextPage = (e) => {
    //input validations
    if (
      inputData.first_name.length < 3 ||
      inputData.last_name.length < 4 ||
      !inputData.email.includes("@") ||
      (inputData.phone.length > 0 && !inputData.phone.includes("+9955"))
    ) {
      e.preventDefault();
    }

    if (
      inputData.first_name.length > 3 &&
      inputData.last_name.length > 4 &&
      inputData.email.includes("@") &&
      inputData.phone.length === 13 &&
      inputData.phone.includes("+9955")
    ) {
      setPage((current) => current + 1);
    }
    if (
      inputData.first_name.length > 3 &&
      inputData.last_name.length > 4 &&
      inputData.email.includes("@") &&
      inputData.phone.length === 0
    ) {
      setPage((current) => current + 1);
    }

    if (inputData.first_name.length < 3) {
      setNameError("name error");
    } else {
      setNameError("");
    }
    if (inputData.last_name.length < 4) {
      setLastNameError("surname error");
    } else {
      setLastNameError("");
    }
    if (!inputData.email.includes("@")) {
      setEmailError("email error");
    } else {
      setEmailError("");
    }
    if (inputData.phone.length === 0) {
      setPhoneError("");
    }
    if (
      inputData.phone.length > 0 ||
      (inputData.phone.length < 13 && !inputData.phone.includes("+9955"))
    ) {
      setPhoneError(
        "phone number must be Georgian. Example: +995 5** ** ** **"
      );
    } else {
      setPhoneError("");
    }
  };
  // prev page function
  const prevPage = () => {
    setPage((current) => current - 1);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setInputData({ ...inputData, first_name: e.target.value });
        }}
        value={inputData.first_name}
      />
      <p className="error_message">{nameError}</p>
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) =>
          setInputData({ ...inputData, last_name: e.target.value })
        }
        value={inputData.last_name}
      />
      <p className="error_message">{lastNameError}</p>
      <input
        type="email"
        placeholder="E Mail"
        onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
        value={inputData.email}
      />
      <p className="error_message">{emailError}</p>
      <input
        type="tel"
        placeholder="+995 5__ __ __ __ "
        onChange={(e) => setInputData({ ...inputData, phone: e.target.value })}
        value={inputData.phone}
      />{" "}
      <p className="error_message">{phoneError}</p>
      <>
        <button disabled={page === 0} onClick={prevPage}>
          {"<"}
        </button>
        <button onClick={nextPage}>{">"} </button>
      </>
    </div>
  );
}

export default PersonalInfo;
