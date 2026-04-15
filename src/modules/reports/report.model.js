const pool = require("../../config/db");
async function saveReport(reportData) {
  try {
    const query = `
      INSERT INTO reports (report)
      VALUES ($1)
      RETURNING *;
    `;

    const values = [reportData];

    const result = await pool.query(query, values);

    return result.rows[0];
  } catch (err) {
    console.error("message", err.message);
  }
}

async function getLatestReport() {
  try {
    const result = await pool.query(
      `SELECT * FROM reports ORDER BY created_at DESC LIMIT 1;`,
    );
    return result.rows;
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = { saveReport, getLatestReport };
