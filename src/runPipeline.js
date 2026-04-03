const {
  createJobs,
  addJobSkills,
  findingGaps,
} = require("./modules/jobs/job.model");
const { getAllJobs } = require("./modules/jobs/job.scraper");
const { saveReport } = require("./modules/reports/report.model");
const { generateWeeklyReport } = require("./modules/reports/report.service");
const cron = require("node-cron");
async function runPipeline() {
  const jobs = await getAllJobs();

  for (let jobData of jobs) {
  const job = await createJobs(jobData);

  if (job && job.id) {
    await addJobSkills(job.id, jobData.skills);
  }
}
  const gapData = await findingGaps();
  const report = await generateWeeklyReport(gapData);

  await saveReport(report);
}


  runPipeline();
