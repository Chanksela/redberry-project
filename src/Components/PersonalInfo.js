import React from "react";

function PersonalInfo({ inputData, setInputData }) {
  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setInputData({ ...inputData, first_name: e.target.value });
        }}
        value={inputData.first_name}
        minLength="2"
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) =>
          setInputData({ ...inputData, last_name: e.target.value })
        }
        value={inputData.last_name}
        minLength="2"
        required
      />
      <input
        type="email"
        placeholder="E Mail"
        onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
        value={inputData.email}
        required
      />
      <input
        type="tel"
        placeholder="+995 5__ __ __ __ "
        onChange={(e) => setInputData({ ...inputData, phone: e.target.value })}
        value={inputData.phone}
      />
    </div>
  );
}

export default PersonalInfo;
