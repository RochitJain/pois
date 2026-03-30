require('dotenv').config();
const pool = require('./config/db');
const {createJobs,addJobSkill,findingGaps} = require('./modules/jobs/job.model');
const {companyInfo} = require('./modules/jobs/job.scraper');
const { saveReport } = require('./modules/reports/report.model');
const {generateWeeklyReport} = require('./modules/reports/report.service');

async function run() {
  try{
    const companyinfo = await companyInfo();

    const job = await createJobs({
      title : companyinfo.title,
      company : "Google",
      job_description : companyinfo.job_description.toLowerCase(),
      source_url : companyinfo.url,
    })

    if(job.id && job) {
      await addJobSkill(job.id,companyinfo.skills)
    }
    } catch(err)  {
      console.log(err.message)
    }
}

async function runopenai() {
  try{const gapData = await findingGaps();
  const generateReport = await generateWeeklyReport(gapData);
  // console.log(JSON.stringify(generateReport, null, 2));
  // console.log(generateReport);
   await saveReport(generateReport)
  // console.log(savedReport)
} catch(err)  {
  console.log(err.message)
}finally {
   console.log("Before closing DB");
await pool.end();
console.log("After closing DB");
  }
} 


runopenai();