require('dotenv').config();
const pool = require('./config/db');
const {createJobs,addJobSkill} = require('./modules/jobs/job.model');
const {companyInfo} = require('./modules/jobs/job.scraper');

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

run();