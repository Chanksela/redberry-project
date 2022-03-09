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
  }, []);
  const lastItem = fetchedApplications.length - 1;
  return (
    <div>
      {fetchedApplications.length > 1 ? (
        <div>
          <div>
            <p>{fetchedApplications[lastItem].first_name}</p>
            <p>{fetchedApplications[lastItem].last_name}</p>
            <p>{fetchedApplications[lastItem].email}</p>
            <p>{fetchedApplications[lastItem].phone}</p>
            <p>{fetchedApplications[lastItem].work_preference}</p>
            <p>{fetchedApplications[lastItem].had_covid}</p>
            <p>{fetchedApplications[lastItem].had_covid_at}</p>
            <p>{fetchedApplications[lastItem].vaccinated}</p>
            <p>{fetchedApplications[lastItem].vaccinated_at}</p>
            <p>{fetchedApplications[lastItem].will_organize_devtalk}</p>
            <p>{fetchedApplications[lastItem].devtalk_topic}</p>
            <p>{fetchedApplications[lastItem].something_special}</p>
            <p>{fetchedApplications[lastItem].skills[0].experience} years</p>
          </div>{" "}
          <div>
            <p>{fetchedApplications[lastItem - 1].first_name}</p>
            <p>{fetchedApplications[lastItem - 1].last_name}</p>
            <p>{fetchedApplications[lastItem - 1].email}</p>
            <p>{fetchedApplications[lastItem - 1].phone}</p>
            <p>{fetchedApplications[lastItem - 1].work_preference}</p>
            <p>{fetchedApplications[lastItem - 1].had_covid}</p>
            <p>{fetchedApplications[lastItem - 1].had_covid_at}</p>
            <p>{fetchedApplications[lastItem - 1].vaccinated}</p>
            <p>{fetchedApplications[lastItem - 1].vaccinated_at}</p>
            <p>{fetchedApplications[lastItem - 1].will_organize_devtalk}</p>
            <p>{fetchedApplications[lastItem - 1].devtalk_topic}</p>
            <p>{fetchedApplications[lastItem - 1].something_special}</p>
            <p>
              {fetchedApplications[lastItem - 1].skills[0].experience} years
            </p>
          </div>{" "}
          <div>
            <p>{fetchedApplications[lastItem - 2].first_name}</p>
            <p>{fetchedApplications[lastItem - 2].last_name}</p>
            <p>{fetchedApplications[lastItem - 2].email}</p>
            <p>{fetchedApplications[lastItem - 2].phone}</p>
            <p>{fetchedApplications[lastItem - 2].work_preference}</p>
            <p>{fetchedApplications[lastItem - 2].had_covid}</p>
            <p>{fetchedApplications[lastItem - 2].had_covid_at}</p>
            <p>{fetchedApplications[lastItem - 2].vaccinated}</p>
            <p>{fetchedApplications[lastItem - 2].vaccinated_at}</p>
            <p>{fetchedApplications[lastItem - 2].will_organize_devtalk}</p>
            <p>{fetchedApplications[lastItem - 2].devtalk_topic}</p>
            <p>{fetchedApplications[lastItem - 2].something_special}</p>
            <p>
              {fetchedApplications[lastItem - 1].skills[0].experience} years
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      <Link to="/">Main Page</Link>
    </div>
  );
}

export default SubmitedItems;
