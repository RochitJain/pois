const pool = require("../../config/db");

async function createJobs(jobData) {
  try {
    const result = await pool.query(
      `INSERT INTO jobs (title, company, job_description, source_url) 
                VALUES ($1, $2, $3, $4)
                ON CONFLICT (source_url) DO NOTHING
                RETURNING *`,
      [
        jobData.title,
        jobData.company || 'Unknown',
        jobData.job_description,
        jobData.source_url,
      ],
    );
    return result.rows[0];
  } catch (err) {
    console.error(err.message);
  }
}

async function addJobSkills(job_id, skills) {
  try {
    for (let skill of skills) {
      await pool.query(
        "INSERT INTO job_skills (job_id, skill) VALUES ($1, $2)",
        [job_id, skill],
      );
    }
  } catch (err) {
    console.log(err.message);
  }
}

async function skillDemandCheck() {
  try {
    const demand = await pool.query(
      `SELECT skill, COUNT(*) as demand
        FROM job_skills
        GROUP BY skill
        ORDER BY demand DESC `,
    );
    console.log(demand.rows);
  } catch (err) {
    console.error(err.message);
  }
}

async function findingGaps() {
  const result = await pool.query(`
        SELECT 
  d.skill,
  d.demand,
  COALESCE(y.proficiency, 0) AS proficiency,
  d.demand * (5 - COALESCE(y.proficiency, 0)) AS priority
FROM (
  SELECT skill, COUNT(*) AS demand
  FROM job_skills
  GROUP BY skill
) d
LEFT JOIN your_skills y
ON d.skill = y.skill
ORDER BY priority DESC;
`);

  return result.rows;
}

module.exports = { createJobs, addJobSkills, findingGaps, skillDemandCheck };
