"use server";
const OpenAI = require("openai");
//const path = require('path');
require("dotenv").config();

async function generateWeeklyReport(gapData) {
  try {
    if (!gapData || gapData.length === 0) {
      return {
        focus_skills: [],
        plan: [],
        warnings: ['No data available']
      };
    }

    const topSkills = gapData.slice(0, 2);
    const focusSkills = topSkills.map(s => s.skill);

    const skill1 = focusSkills[0];
    const skill2 = focusSkills[1] || skill1;

    const plan = [
      { day: 1, task: `Learn basics of ${skill1}` },
      { day: 2, task: `Build small project using ${skill1}` },
      { day: 3, task: `Integrate ${skill1} into your system` },
      { day: 4, task: `Learn basics of ${skill2}` },
      { day: 5, task: `Build feature using ${skill2}` },
      { day: 6, task: `Combine ${skill1} + ${skill2}` },
      { day: 7, task: `Deploy and test` },
    ];

    return {
      focus_skills: focusSkills,
      plan,
      warnings: [
        'Do not switch skills mid-week',
        'Focus only on top gaps'
      ]
    };

  } catch (err) {
    console.error('Report Error:', err.message);
    return null;
  }
}

module.exports = { generateWeeklyReport };

