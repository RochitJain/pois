const axios = require('axios');
const cheerio = require('cheerio');
const {extractSkills} = require('../jobs/job.service')
url = 'https://bebee.com/in/jobs/ai-backend-engineer-coderbotics-ai-new-delhi--talent-8afd90418254?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic'


async function companyInfo() {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const title = $('h1').text();
    // const company_name = $('h1').text();
    const job_description = $('p').text();
    const skills = extractSkills(job_description);
     console.log(skills)
    return {title, job_description,url}
}



companyInfo()

module.exports = {companyInfo}