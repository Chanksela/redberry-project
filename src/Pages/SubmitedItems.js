import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const token = "8b3c3554-eef2-4147-98b5-e4694c656950";
const URL = `https://bootcamp-2022.devtest.ge/api/applications?token=${token}`;
const authAxios = axios.create({
  baseURL: URL,
  headers: { Authorization: `Bearer ${token}` },
});

function SubmitedItems() {
  const [fetchedApplications, setFetchedApplications] = useState("");
  const fetchedApps = () => {
    authAxios
      .get(URL)
      .then((response) => response.data)
      .then((apps) => setFetchedApplications(apps));
  };
  useEffect(() => {
    fetchedApps();
  });
  return (
    <div>
      <button onClick={fetchedApps}>Show Feched Applications</button>
      <Link to="/">Main Page</Link>
    </div>
  );
}

export default SubmitedItems;
