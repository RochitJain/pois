const pool = require('../../config/db');

async function createJobs (jobData) {
    console.log(jobData)
    try{
        const result = await pool.query(
                `INSERT INTO jobs (title, company, job_description, source_url) 
                VALUES ($1, $2, $3, $4)
                ON CONFLICT (source_url) DO NOTHING
                RETURNING *`,
                [jobData.title, jobData.company, jobData.job_description, jobData.source_url] );
                console.log(result.rows[0]);
        } catch (err) {
            console.error(err)
        }
}

module.exports = {createJobs}
