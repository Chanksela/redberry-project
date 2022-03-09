import React, { useState } from "react";

function PersonalInfo({ page, setPage, inputData, setInputData }) {
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const nextPage = (e) => {
    if (
      inputData.first_name.length < 3 ||
      inputData.last_name.length < 4 ||
      !inputData.email.includes("@")
      //   ||
      //   (!inputData.phone.startsWith("+995") &&
      //     inputData.phone.startsWith("+995")) ||
      //   inputData.phone.length < 13
      // )
    ) {
      e.preventDefault();
    } else {
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
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setInputData({ ...inputData, first_name: e.target.value });
        }}
        value={inputData.first_name}
      />
      <p>{nameError}</p>
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) =>
          setInputData({ ...inputData, last_name: e.target.value })
        }
        value={inputData.last_name}
      />
      <p>{lastNameError}</p>
      <input
        type="email"
        placeholder="E Mail"
        onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
      />
      <p>{emailError}</p>
      <input
        type="tel"
        placeholder="+995 5__ __ __ __ "
        onChange={(e) => setInputData({ ...inputData, phone: e.target.value })}
        value={inputData.phone}
      />{" "}
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
