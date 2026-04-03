const axios = require('axios');
const cheerio = require('cheerio');

const {extractSkills} = require('../jobs/job.service')
const jobUrls = [
  'https://bebee.com/in/jobs/nodejs-developer-site2gym-hyderabad--theirstack-654090549',
  'https://bebee.com/in/jobs/business-development-manager-ai-ml-computer-vision-kollinear-consultants--m5jex1ids0fyn8w79urk3qalog4p6cb2',
  'https://bebee.com/in/jobs/director-of-artificial-intelligence-ai-strategy-kroll-inc-mumbai-maharashtra--theirstack-655269333'
];

async function scrapeJob(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const title = $('h1').first().text().trim();

    const description = $('body').text().trim(); // simple fallback
    const skills = extractSkills(description);
    console.log(`Scraped job: ${title}`);
    console.log(`Extracted skills: ${skills}`);
    return {
      title,
      company: 'Unknown',
      job_description: description,
      url,
      skills
    };

  } catch (err) {
    console.error('Scrape error:', err.message);
    return null;
  }
}

async function getAllJobs() {
  const jobs = [];

  for (let url of jobUrls) {
    const job = await scrapeJob(url);
    if (job) jobs.push(job);
  }

  console.log('Jobs found:', jobs.length);
  return jobs;
}

module.exports = { getAllJobs };