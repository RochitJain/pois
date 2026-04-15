const axios = require("axios");
const cheerio = require("cheerio");

const { extractSkills } = require("../jobs/job.service");
const jobUrls = [
  "https://bebee.com/in/jobs/nodejs-developer-site2gym-hyderabad--theirstack-654090549",
  "https://bebee.com/in/jobs/business-development-manager-ai-ml-computer-vision-kollinear-consultants--m5jex1ids0fyn8w79urk3qalog4p6cb2",
  "https://bebee.com/in/jobs/director-of-artificial-intelligence-ai-strategy-kroll-inc-mumbai-maharashtra--theirstack-655269333",
];

async function scrapeJob(url) {
  try {
    const response = await axios.get(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      responseType: "text",
    });

    const $ = cheerio.load(response.data);

    let description = "";

    $('script[type="application/ld+json"]').each((i, el) => {
      try {
        const json = JSON.parse($(el).html());

        if (json["@type"] === "JobPosting" && json.description) {
          description = json.description
            .replace(/<[^>]+>/g, " ")
            .replace(/\s+/g, " ")
            .trim();
        }
      } catch (err) {}
    });

    const title = $("h1").first().text().trim();

    let skills = extractSkills(description);

    if (!skills.length) {
      const fallbackDesc = $("body").text().trim();
      skills = extractSkills(fallbackDesc);
    }

    return {
      title,
      company: "Unknown",
      job_description: description || $("body").text().trim(),
      url,
      skills,
    };
  } catch (err) {
    console.error("Scrape error:", err.message);
    return null;
  }
}

async function getAllJobs() {
  try {
    const jobs = [];

    for (let url of jobUrls) {
      const job = await scrapeJob(url);
      if (job) jobs.push(job);
    }

    return jobs;
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = { getAllJobs };
