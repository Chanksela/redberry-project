import React, { useEffect, useState } from "react";

function TechSkills({ page, setPage, inputData, setInputData }) {
  const baseURL = "https://bootcamp-2022.devtest.ge/api/skills";
  const [fetchedSkills, setFetchedSkills] = useState([]);
  const fetchedSkillsAPI = () => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => setFetchedSkills(data));
  };
  useEffect(() => {
    fetchedSkillsAPI();
  }, []);
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
      <select
        onClick={(e) => {
          console.log(e.target.key);
          setInputData({
            ...inputData,
            // need to solve id/key value problem
            skills: [
              {
                id: e.target.id,
                title: e.target.value,
              },
            ],
          });
        }}
      >
        {fetchedSkills.map((skill) => {
          return (
            <option key={skill.id} value={skill.title}>
              {skill.title}
              {skill.id}
            </option>
          );
        })}
      </select>{" "}
      <>
        <button disabled={page === 0} onClick={prevPage}>
          {"<"}
        </button>
        <button onClick={nextPage}>{">"} </button>
      </>
    </div>
  );
}

export default TechSkills;
