import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const URL = "https://bootcamp-2022.devtest.ge/api/applications";
const token = "8b3c3554-eef2-4147-98b5-e4694c656950";
const authAxios = axios.create({
  baseURL: URL,
  headers: { Authorization: `Bearer ${token}` },
});
function SubmitedItems() {
  const fetchedApps = () => {
    authAxios
      .get(URL)
      .then((response) => console.log(response.data))
      .then((apps) => console.log(apps));
  };
  return (
    <>
      <button onClick={fetchedApps}>Show Applications</button>
      <Link to="/">Main Page</Link>
    </>
  );
}

export default SubmitedItems;
