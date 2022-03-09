import React from "react";
import { Link } from "react-router-dom";
var token = "89nOpas|asdanjjh^&as";
function SubmitedItems() {
  const fetchApplications = () => {
    fetch("https://bootcamp-2022.devtest.ge/api/applications", {
      method: "GET",
      headers: {
        token: token,
      },
    }).then((res) => res.json().then((data) => console.log(data)));
  };
  return (
    <>
      <button onClick={fetchApplications}>Show Applications</button>
      <Link to="/">Main Page</Link>
    </>
  );
}

export default SubmitedItems;
