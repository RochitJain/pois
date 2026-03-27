require('dotenv').config();
const pool = require('./config/db');
const {createJobs} = require('./modules/jobs/job.model');
const {companyInfo} = require('./modules/jobs/job.scraper');

// async function testDB() {
//   try {
//     const res = await pool.query('SELECT NOW()');
//     console.log('DB Connected:', res.rows[0]);
//   } catch (err) {
//     console.error('DB Error:', err);
//   } finally {
//     process.exit();
//   }
// }

async function run() {
  try{
    const companyinfo = await companyInfo();

    createJobs({
      title : companyinfo.title.toLowerCase(),
      company : "Google",
      job_description : companyinfo.job_description.toLowerCase(),
      source_url : companyinfo.url,
    })

  }catch(err){
    console.log(err)
  }
}

run();