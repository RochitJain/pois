const axios = require('axios');
const cheerio = require('cheerio');
const {extractSkills} = require('../jobs/job.service')
const url = 'https://bebee.com/in/jobs/full-stack-developers-react-node-python-ai-zifcare-com-bengaluru--theirstack-647598189'

async function companyInfo() {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const title = $('h1').text().trim();
    
    const job_description = $('p').text().trim();
    const skills = extractSkills(job_description);
    return {title, job_description,url,skills}
}

module.exports = {companyInfo}