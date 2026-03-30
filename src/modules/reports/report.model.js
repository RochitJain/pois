const pool = require("../../config/db");
async function saveReport(reportData) {
try {  const query = `
    INSERT INTO reports (report)
    VALUES ($1)
    RETURNING *;
  `;

  const values = [reportData];

  const result = await pool.query(query, values);

  return result.rows[0];}
 catch (err) {
    console.error(err.message);
  }
}

module.exports = { saveReport };