const skills = [
  "python",
  "fastapi",
  "flask",
  "docker",
  "kubernetes",
  "aws",
  "postgresql",
  "redis",
  "node",
  "react",
  "mongodb",
  "sql",
  "rest",
  "microservices",
  "ci/cd",
  "AI",
  "ML",
];
function extractSkills(job_description) {
  try {
    const desc = job_description.toLowerCase();

    const matchedSkills = [];
    for (let skill of skills) {
      if (desc.includes(skill)) matchedSkills.push(skill);
    }
    return matchedSkills;
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = { extractSkills };
