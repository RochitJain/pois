const skills = [
  'python',
  'fastapi',
  'docker',
  'postgresql',
  'aws',
  'node',
  'react',
  'mongodb',
  'sql',
  'ai'
];
function extractSkills(job_description) {
    const desc = job_description.toLowerCase();
    const matchedSkills = [];
    for(let skill of skills){
        if(desc.includes(skill))
            matchedSkills.push(skill);
    }
        return matchedSkills
    }


module.exports = {extractSkills}


