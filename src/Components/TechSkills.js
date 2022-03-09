import React, { useEffect, useState } from "react";
import axios from "axios";

function TechSkills({ page, setPage, inputData, setInputData }) {
  const baseURL = "https://bootcamp-2022.devtest.ge/api/skills";
  const [fetchedSkills, setFetchedSkills] = useState([]);
  const [skill, setSkill] = useState("");
  const [skillID, setSkillID] = useState("");
  const [experience, setExperience] = useState("");
  const fetchedSkillsAPI = () => {
    axios
      .get(baseURL)
      .then((response) => response.data)
      .then((skills) => setFetchedSkills(skills));
  };
  useEffect(() => {
    fetchedSkillsAPI();
  }, []);
  const nextPage = () => {
    setPage((current) => current + 1);
  };
  // prev page function
  const prevPage = () => {
    setPage((current) => current - 1);
  };
  return (
    <div>
      {fetchedSkills.map((skill) => {
        return (
          <button
            key={skill.id}
            onClick={(e) => {
              setSkill(e.target.value);
              setSkillID(e.target.id);
            }}
            id={skill.id}
            value={skill.title}
          >
            {skill.title}
          </button>
        );
      })}
      <div>
        <input type="number" onChange={(e) => setExperience(e.target.value)} />
      </div>
      <div>
        <h1>{skill}</h1>
        <p>{experience}</p>
      </div>
      <div>
        <button
          onClick={(e) => {
            setInputData({
              ...inputData,
              // need to solve id/key value problem
              skills: [
                {
                  id: parseInt(skillID),
                  experience: parseInt(experience),
                },
              ],
            });
          }}
        >
          ADD
        </button>
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

export default TechSkills;
