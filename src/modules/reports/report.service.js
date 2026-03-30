"use server";
const OpenAI = require("openai");
//const path = require('path');
require("dotenv").config();
//require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// console.log(process.env.OPENAI_API_KEY);
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateWeeklyReport(gapData) {
  try {
    //     // Take top 3 skills
    //     const topSkills = gapData.slice(0, 3);

    //     // Prepare readable input
    //     const skillText = topSkills
    //       .map(
    //         (s) =>
    //           `${s.skill} (demand: ${s.demand}, proficiency: ${s.proficiency}, gap: ${s.gap})`
    //       )
    //       .join('\n');

    //     const prompt = `
    // You are a strict career strategist.

    // Top skill gaps:
    // ${skillText}

    // Return ONLY valid JSON. No explanation.

    // Format:
    // {
    //   "focus_skills": ["skill1", "skill2"],
    //   "plan": [
    //     { "day": 1, "task": "..." },
    //     { "day": 2, "task": "..." },
    //     { "day": 3, "task": "..." },
    //     { "day": 4, "task": "..." },
    //     { "day": 5, "task": "..." },
    //     { "day": 6, "task": "..." },
    //     { "day": 7, "task": "..." }
    //   ],
    //   "warnings": ["...", "..."]
    // }

    // Rules:
    // - Focus only on top 2–3 skills
    // - Tasks must be practical (build, code, deploy)
    // - No generic advice
    // - Keep tasks short and actionable
    // `;

    //     const response = await client.chat.completions.create({
    //       model: 'gpt-4o-mini',
    //       messages: [
    //         { role: 'system', content: 'You output strict JSON only.' },
    //         { role: 'user', content: prompt },
    //       ],
    //       temperature: 0.3,
    //     });

    //     const text = response.choices[0].message.content;

    //     // Parse JSON safely
    //     const json = JSON.parse(text);

    return {
      focus_skills: ["fastapi", "docker"],
      plan: [
        { day: 1, task: "Learn FastAPI basics" },
        { day: 2, task: "Build API" },
      ],
      warnings: ["Do not switch tasks"],
    };
  } catch (err) {
    console.error("Report Error:", err.message);
    return null;
  }
}

module.exports = { generateWeeklyReport };
