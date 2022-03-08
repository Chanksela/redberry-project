// fetching for skills
async function fetchSkills() {
  const baseRL = "https://bootcamp-2022.devtest.ge/api/skills";
  const response = await fetch(baseRL);
  const data = await response.json([]);
  console.log(data);
}
export default fetchSkills;
// fetching for applications
